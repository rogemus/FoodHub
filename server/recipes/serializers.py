from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from rest_framework_jwt.settings import api_settings
from django.utils.translation import gettext_lazy as _

from recipes.models import Recipe
from accounts.models import User
from accounts.serializers import UserSerializer


class RecipeSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()

    class Meta:
        model = Recipe
        fields = (
            'id',
            'title',
            'author',
            'description',
        )
        read_only_fields = (
            'id',
            'author',
        )
