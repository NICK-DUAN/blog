from django.shortcuts import render
from django.views import View

from django.http.response import HttpResponse, JsonResponse


class Love(View):
    def dispatch(self, request, *args, **kwargs):
        result = super(Love,self).dispatch(request, *args, **kwargs)   #根据请求方式分发
        return result
 
    def get(self, request):
        return HttpResponse('<h1>爱你一万年</h1>')