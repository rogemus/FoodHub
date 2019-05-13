from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from recipes.models import Recipe
from comments.models import Comment
from comments.permissions import IsCommentAuthorOrReadOnly
from comments.serializers import CommentSerializer


class CommentResultsSetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 30


class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows comments to be viewed or edited.
    """
    authentication_classes = (JSONWebTokenAuthentication,)
    permission_classes = (IsAuthenticatedOrReadOnly, IsCommentAuthorOrReadOnly,)
    serializer_class = CommentSerializer
    pagination_class = CommentResultsSetPagination

    def destroy(self, request, *args, **kwargs):
        comment = self.get_object()
        comment.mark_as_removed()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def get_queryset(self):
        return Comment.objects.filter(
            book=self.kwargs['recipe_pk'],
            is_removed=False,
            is_public=True,
        ).order_by('-submit_date')

    def perform_create(self, serializer):
        queryset = Recipe.objects.all()
        recipe = get_object_or_404(queryset, pk=self.kwargs['recipe_pk'])
        serializer.save(
            author=self.request.user,
            recipe=recipe,
        )