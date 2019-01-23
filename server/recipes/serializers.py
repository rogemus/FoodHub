from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from rest_framework_jwt.settings import api_settings
from django.utils.translation import gettext_lazy as _

from recipes.models import Recipe
from accounts.models import User

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'api_url',
        )

class BookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(many=True, read_only=True)

    class Meta:
        model = Recipe
        fields = (
            'id',
            'title',
            'author',
            'description',
            'image_url',
            'api_url'
        )