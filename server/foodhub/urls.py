from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from rest_framework import routers

from accounts import urls as accounts_urls
from accounts.views import UserViewSet
from recipes.views import RecipeViewSet


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path('accounts/', include(accounts_urls)),
    url(r'^api/', include(router.urls)),
    path('admin/', admin.site.urls),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
