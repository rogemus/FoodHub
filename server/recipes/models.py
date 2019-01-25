from django.conf import settings
from django.db import models


class Recipe(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(null=False, blank=False)
    image = models.ImageField(null=True)

    def __str__(self):
        return self.title
