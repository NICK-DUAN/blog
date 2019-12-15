from django.contrib import admin

from cong import models

@admin.register(models.Love)
class LoveAdmin(admin.ModelAdmin):
    list_display = ("title", "content")
