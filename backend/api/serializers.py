from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from . import models
from django.contrib.auth.models import User
from django.core.serializers import *
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
	user_profile = serializers.SerializerMethodField('profile')
	
	def profile(self, data):
		import json as j
		data = models.K7UserMstr.objects.get(user_id_id=data.id)
		data = serialize('json', [data, ])
		struct = j.loads(data)
		if data:
		    return struct[0]['fields']
		else:
		    return {}

	class Meta:
		model = User
		fields = ('id', 'username','user_profile','is_active','email')
		# extra_kwargs = {
		#     'email': {'required': False},
		#     'password':{'required':False},
		#     # 'created_by': {'default': serializers.CurrentUserDefault()},'updated_by': {'default': serializers.CurrentUserDefault()}
		#     }

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.name
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class gettestStoreSerializer(serializers.ModelSerializer):

	records = serializers.SerializerMethodField('Get_Record')

	def Get_Record(self,data):
		try:
			data = models.RecordMstr.objects.filter(test_id=data.pk)
		except:
			return "Record is not found"
		data = GetRecordSerializer(data,many=True)
		return data.data


	class Meta:
		model = models.TestMstr
		fields = '__all__'


class GetRecordSerializer(serializers.ModelSerializer):

	class Meta:
		model = models.RecordMstr
		fields = '__all__'


class TestStoreSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = models.StoreMstr
		fields = '__all__'

class TestSerializer(serializers.ModelSerializer):

	class Meta:
		model = models.TestMstr
		fields = '__all__'

class TestStoreMapSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = models.TestStoreMap
		fields = '__all__'


class ControlstoreSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = models.ControlStoreMstr
		fields = '__all__'



class LoadDataSeralizer(serializers.ModelSerializer):
	
	class Meta:
		model = models.TestMstr
		fields = '__all__'

class AuthSeralizer(serializers.ModelSerializer):
	
	class Meta:
		model = models.AuthTokenMstr
		fields = '__all__'

class WeeklyStoreSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = models.WeeklyStrMst
		fields = '__all__'

class MeasurementStoreSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = models.MeasurementTbl
		fields = '__all__'

class ControlStoreSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = models.ControlStoreMstr
		fields = '__all__'


class ConfigMasterSerializer(serializers.ModelSerializer):

	class Meta:
		model = models.ConfigMstr
		fields = '__all__'

class NotificationSerializer(serializers.ModelSerializer):

	class Meta:
		model = models.Notification
		fields = '__all__'


class TestHistoryActionDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = models.TestHistoryActionDetail
		fields = '__all__'


class RegionMstrSerializer(serializers.ModelSerializer):

	class Meta:
		model = models.RegionMstr
		fields = '__all__'


# class AdminImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.AdminImage
#         fields= ('image_path','user_id')
