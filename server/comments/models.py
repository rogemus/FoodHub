from textwrap import shorten

from django.conf import settings
from django.db import models


class Comment(models.Model):
    recipe = models.ForeignKey('recipes.Recipe', related_name='comments', on_delete=models.CASCADE)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.TextField(null=False, blank=False, max_length=250)
    submit_date = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(null=True, blank=True)
    is_public = models.BooleanField(default=True)
    is_removed = models.BooleanField(default=False)

    def mark_as_removed(self):
        self.is_removed = True
        self.is_public = False
        self.save(update_fields=['is_removed', 'is_public', ])

    def __str__(self):
        return shorten(self.text, width=settings.COMMENT_SNIPPET_LENGTH, placeholder='...')