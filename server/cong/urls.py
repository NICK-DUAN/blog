from django.urls import path
from cong.views import Love

urlpatterns = [
    path('index', Love.as_view()),
]