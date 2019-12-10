from django.db import models

class Love(models.Model):
    title = models.CharField(max_length=64, verbose_name="标题")
    content = models.TextField(default="", verbose_name="内容")

    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)

    class Metadata:
        verbose_name = "土味情话"

    def __str__(self):
        return self.title
