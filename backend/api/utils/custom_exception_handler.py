from api.helpers import executeDML,getRowResults
from api import json
import pandas as pd
import time
import json
import logging

logger = logging.getLogger(__name__)

def exception_handler_save(response):
        if response is not None:
            user_id = getUserId(response['user_id'])
            param = (int(user_id),
                     int(response['status_code']),
                     response['requestname'],
                     response['message'],
                     response['region_name'])
            sql = "INSERT INTO exception_log(user_id, status_code, requestname, message, region_name) VALUES (?,?,?,?,?)"
            Record_save = executeDML(sql, param)

def getUserId(jwt_tokenValue):
    split_token = jwt_tokenValue.split('Bearer ')
    jwt_token = split_token[1]
    get_user = ("SELECT * FROM Tl_Authtoken_tbl WHERE jwt_token =?")
    get_user = getRowResults(get_user, (jwt_token))
    user_id = None
    if(get_user):
        user_id = get_user[0]['user_id_id']
    return user_id

def getUserName(user_id):
    get_user = ("SELECT * FROM auth_user WHERE id =?")
    get_user = getRowResults(get_user, (user_id))
    user_name = None
    if(get_user):
        user_name = get_user[0]['username']
    return user_name

class ExceptionMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        try:
            auditLog(request,response)
        except:
            pass
        # if response.status_code == 500:
        #     df = pd.read_html(str(response.content), flavor='lxml')[0]
        #     final = df.to_dict(orient='index')
        #     self.process_exception(request, final[4][1])
        return response

    # def process_exception(self, request, exception):
    #     if exception:
    #         errorData = {
    #             'user_id': request.META['HTTP_AUTHORIZATION'],
    #             'message': str(exception),
    #             'requestname': request.META['PATH_INFO'],
    #             'status_code': 500,
    #             'region_name': request.META['HTTP_COUNTRY']
    #         }
    #         exception_handler_save(errorData)
            # return json.Response('Something went wrong please try again later', False)

def auditLog(request, response):
    if response.status_code == 200:
        path_info = request.META['PATH_INFO']
        path_info = path_info.replace('/api/', '')
        if path_info != 'login' and path_info != 'accounts/login' and path_info != 'getaudit_logdata':
            errorData = {
            'user_id': request.META['HTTP_AUTHORIZATION'],
            'api_path': path_info,
            'action': request.META['REQUEST_METHOD'],
            'region_name': request.META['HTTP_COUNTRY']
            }
            audit_log_save(errorData)
        elif path_info == 'login':
            jsonData = json.loads(response.content)
            errorData = {
                'user_id': 'Bearer '+jsonData['data']['token'],
                'api_path': path_info,
                'action': request.META['REQUEST_METHOD'],
                'region_name': jsonData['data']['region_code']
            }
            audit_log_save(errorData)

def audit_log_save(response):
    if response is not None:
        try:
            user_id = getUserId(response['user_id'])
            user_name = None
            if(user_id):
                user_name = getUserName(user_id)
            param = (int(user_id),
                     response['api_path'],
                     response['action'],
                     response['region_name'],
                     int(time.time()),
                     user_name)
            sql = "INSERT INTO audit_log(user_id, api_path, action, region_name, created_on,user_name) VALUES (?,?,?,?,?,?)"
            Record_save = executeDML(sql, param)
        except:
            logger.error('audit_log error')