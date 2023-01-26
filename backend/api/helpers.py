from .serializers import *
from rest_framework_simplejwt.tokens import RefreshToken
import time
from django.db import connection

my_conn = None


def expect_urls():
    urls = [
        '/api/login/',
    ]
    return urls


def relative_urls():
    urls = [
        "(\/api\/reset_pwd\/)(?P<string>.+)$",
        "(\/media\/)",
    ]
    return urls


def header(request):
    auth = request.META.get('HTTP_AUTHORIZATION')
    if auth:
        auth = auth.split()
    if auth and auth[1]:
        return auth[1]

    return False;


def auth_token(user, request):
    refresh = RefreshToken.for_user(user)
    return {"token": str(refresh.access_token)}


def auth_user(username, pwd):
    try:
        user = User.objects.get(username=username)
    except:
        return {"status": True, "error_msg": "Invalid User Credentials"}
    if user:
        try:
            user = User.objects.get(username=username, is_active=True)
            if user and user.check_password(pwd):
                return {"user": user, "status": False}
            else:
                return {"status": True, "error_msg": "Invalid User Credentials"}
        except:
            return {"status": True, "error_msg": "Invalid User Credentials,Please contact Admin."}

    return None;


# convert unix timestamp to readable format
def convert_epoch_to_dt(date):
    return time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(date))


# Database call methods - Start
def getSingleRowResult(cursor):
    columns = [column[0] for column in cursor.cursor_description]
    return dict(zip(columns, cursor))


def getSingleRecordResult(query, param):
    query = query.replace('?', ' %s')
    if isinstance(param, int) or isinstance(param, str):
        new_list = [param]
        param = new_list
    with connection.cursor() as cursor:
        cursor.execute(query, param)
        columns = [col[0] for col in cursor.description]
        data = cursor.fetchone()
        row = dict(zip(columns, data))
    return row


def executeDML(query, param=None):
    query = query.replace('?', ' %s')
    if param is not None and (isinstance(param, int) or isinstance(param, str)):
        new_list = [param]
        param = new_list
    with connection.cursor() as cursor:
        if param is None:
            cursor.execute(query)
        else:
            cursor.execute(query, param)
        cursor.commit()


def executeManyDML(query, param=None):
    query = query.replace('?', ' %s')
    if param is not None and (isinstance(param, int) or isinstance(param, str)):
        new_list = [param]
        param = new_list
    with connection.cursor() as cursor:
        if param is None:
            cursor.executemany(query)
        else:
            cursor.executemany(query, param)
        cursor.commit()


def execute_DML_return_primary_key(query, param):
    query = query.replace('?', ' %s')
    if param is not None and (isinstance(param, int) or isinstance(param, str)):
        new_list = [param]
        param = new_list
    with connection.cursor() as cursor:
        if param is None:
            cursor.execute(query)
        else:
            cursor.execute(query, param)
        _id = cursor.execute('SELECT @@IDENTITY').fetchone()
        cursor.commit()
    return _id;


def getRowResults(query, param=None):
    query = query.replace('?', ' %s')
    if param is not None and (isinstance(param, int) or isinstance(param, str)):
        new_list = [param]
        param = new_list
    with connection.cursor() as cursor:
        if param is None:
            cursor.execute(query)
        else:
            cursor.execute(query, param)
        columns = [col[0] for col in cursor.description]
        row = [dict(zip(columns, row)) for row in cursor.fetchall()]
    return row


def getRowResult(cursor):
    results = []
    columns = [column[0] for column in cursor.description]
    for row in cursor.fetchall():
        results.append(dict(zip(columns, row)))
    return results


# Database call methods - End

def find_weeks(start, end):
    import datetime
    l = []
    for i in range((end - start).days + 1):
        d = (start + datetime.timedelta(days=i+1)).isocalendar()[:2]  # e.g. (2011, 52)
        yearweek = '{}{:02}'.format(*d)  # e.g. "201152"
        l.append(yearweek)
    return sorted(set(l))
