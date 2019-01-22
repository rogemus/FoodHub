from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path
from rest_framework import routers

from accounts.views import UserViewSet


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
]
