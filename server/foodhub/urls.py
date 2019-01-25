from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from rest_framework import routers
from rest_framework_nested import routers as nested_routers

from accounts import urls as accounts_urls
from accounts.views import UserViewSet
from recipes.views import RecipeViewSet
from comments.views import CommentViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'recipes', RecipeViewSet)

recipe_router = nested_routers.NestedSimpleRouter(router, r'recipes', lookup='recipes')
recipe_router.register(r'comments', CommentViewSet, base_name='recipes-comments')

urlpatterns = [
    path('accounts/', include(accounts_urls)),
    url(r'^api/', include(router.urls)),
    path('admin/', admin.site.urls),
    url(r'^', include(recipe_router.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
