from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path
from rest_framework import routers

from accounts import urls as accounts_urls
from accounts.views import UserViewSet


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('accounts/', include(accounts_urls)),
    url(r'^api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
