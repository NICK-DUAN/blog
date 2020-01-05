from django.shortcuts import render
from django.views import View

from django.http.response import HttpResponse, JsonResponse


class Base(View):
    def dispatch(self, request, *args, **kwargs):
        result = super(Love,self).dispatch(request, *args, **kwargs)   #根据请求方式分发
        return result
 
class BlogList(Base):
    def get(self):
        pass

    def post(self):
        pass