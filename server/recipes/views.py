from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from recipes.models import Recipe
from recipes.serializers import RecipeSerializer


class RecipeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows comments to be viewed or edited.
    """
    authentication_classes = (JSONWebTokenAuthentication,)
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
