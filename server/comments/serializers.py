from rest_framework import serializers
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer

from comments.models import Comment


class CommentSerializer(NestedHyperlinkedModelSerializer):
    author = serializers.StringRelatedField()

    parent_lookup_kwargs = {
        'recipe_pk': 'recipe__pk',
    }

    class Meta:
        model = Comment
        fields = (
            'id',
            'author',
            'text',
            'submit_date',
            'api_url',
        )
        read_only_fields = (
            'id',
            'author',
            'submit_date',
        )
        extra_kwargs = {
            'api_url': {
                'view_name': 'recipe-comments-detail',
            },

        }
