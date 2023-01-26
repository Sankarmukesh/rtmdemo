import time
import jwt
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from .models import *
from . import json
from . import helpers
from django.db import transaction
import config.config_data as config
from .serializers import AuthSeralizer, RegionMstrSerializer

config_data = config.data

@csrf_exempt
@transaction.atomic
def login(request):
    import json as j
    requestData = j.loads(request.body.decode('utf-8'))
    if 'username' in requestData:
        user = helpers.auth_user(requestData['username'], requestData['password'])
        username = requestData['username']
        user_id = user['user'].id
        if user['status']:
            return json.Response(user['error_msg'], False)
        else:
            userData = user['user']
    if 'token' in requestData:
        encoded_token = requestData['token'][7:]
        jwt_options = {
            'verify_signature': False,
            'verify_exp': False,
            'verify_nbf': False,
            'verify_iat': False,
            'verify_aud': False
        }
        decoded_token = jwt.decode(
            encoded_token,
            'secret',
            algorithms=['HS256'],
            options=jwt_options
        )
        username = decoded_token['email']
        # userData = User.objects.filter(username=username).values()
        # userData = dict(userData[0])
        # userData = helpers.getSingleRecordResult('SELECT * FROM {} WHERE username =?'.format(config_data['common_tbl']['auth_user']),
        #                                          (username))
        userData = User.objects.get(username=username, is_active=True)
        user = userData
        user_id = user.id

    if userData:
        userRegionMap = UserRegionMap.objects.filter(user_id=user_id).values()
        if userRegionMap.count() == 0:
            return json.Response('You are not mapped to any specific market in the FAST tool', False)

        map_data = []
        default_region_detail = None
        for usrRegion in userRegionMap:
            region_master = RegionMstr.objects.get(id=usrRegion['region_id'])
            region_serializer = RegionMstrSerializer(region_master)
            region_detail = region_serializer.data
            region = {
                "region_code": region_detail['region_code'],
                "region_name": region_detail['region_name'],
                "is_default_region": usrRegion['is_default_region']
            }
            if usrRegion['is_default_region'] == region_detail['id']:
                default_region_detail = region

            map_data.append(region)

        region_data = default_region_detail
        # generate token for authenticated user
        auth_token = helpers.auth_token(userData, request)
        if auth_token:
            auth_token['region_code'] = region_data['region_code']
            auth_token['region_name'] = region_data['region_name']
            auth_token['region_data'] = map_data
            auth_token['expiry'] = int(time.time()) + (3600000 * 10000)
            auth_token['username'] = username
            if 'token' in requestData:
                auth_token['username'] = user.first_name+' '+user.last_name

            auth_token_tbl = AuthTokenMstr(
                user_id_id=user_id,
                jwt_token=auth_token['token'],
                expire_ts=int(time.time()) + 36000,
                created_on=int(time.time()),
                is_active=1,
                is_deleted=0
            )
            auth_token_tbl.save()

            user_login_history = UserLoginHistory(
                user_id_id=user_id,
                jwt_token=auth_token['token'],
                login_time=int(time.time()),
                expire_ts=int(time.time()) + 36000,
                created_on=int(time.time()),
                is_active=1,
                is_deleted=0
            )
            user_login_history.save()

            return json.Response(auth_token)
        else:
            transaction.set_rollback(True)
            return json.Response('Check Headers', False)
    else:
        return json.Response('User name or Password Wrong', False)
    return json.Response('')


class logout(generics.ListCreateAPIView):

    def get(self, request):
        headers = request.META['HTTP_AUTHORIZATION']
        split_token = headers.split('Bearer ')
        jwt_token = split_token[1]
        get_user = AuthTokenMstr.objects.get(jwt_token=jwt_token)
        if (get_user):
            user_data = AuthSeralizer(get_user)
            user_id = user_data.data['user_id']
            UserLoginHistory.objects.filter(user_id=user_id, jwt_token=jwt_token).update(
                logout_time=int(time.time()), modified_on=int(time.time()))
            return json.Response("Logout Successfully", True)
        else:
            return json.Response("Unable to get user", False)
