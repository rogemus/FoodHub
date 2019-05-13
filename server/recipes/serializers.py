from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from rest_framework_jwt.settings import api_settings
from django.utils.translation import gettext_lazy as _
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer

from recipes.models import Recipe
from accounts.models import User
from accounts.serializers import UserSerializer
from comments.models import Comment


class CommentSerializer(NestedHyperlinkedModelSerializer):
    author = serializers.StringRelatedField()

    parent_lookup_kwargs = {
        'recipes_pk': 'recipe__pk',
    }

    class Meta:
        model = Comment
        fields = (
            'author',
            'text',
            'submit_date',
        )
        extra_kwargs = {
            'api_url': {
                'view_name': 'recipe-comments-detail',
            },
        }

class RecipeSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    last_comments = CommentSerializer(
        source='get_last_comments',
        many=True,
        read_only=True,
    )

    class Meta:
        model = Recipe
        fields = (
            'id',
            'title',
            'author',
            'description',
            'image',
            'last_comments',
        )
        read_only_fields = (
            'id',
            'author',
        )
