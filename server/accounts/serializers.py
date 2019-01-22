from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from rest_framework_jwt.settings import api_settings
from django.utils.translation import gettext_lazy as _

from accounts.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'is_staff')


class UserCreateSerializer(serializers.ModelSerializer):
    token = SerializerMethodField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        write_only=True,
        min_length=8,
    )

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'token')

    def get_token(self, object):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(object)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class AboutUserSerializer(serializers.ModelSerializer):
    active = serializers.BooleanField(source='is_active')
    joined = serializers.DateTimeField(source='date_joined', format='%Y-%m-%d')

    class Meta:
        model = User
        fields = (
            'first_name',
            'last_name',
            'username',
            'email',
            'joined',
            'active',
        )
