# coding: utf-8

from django.db import models
from server.models import Base

from django.forms.models import model_to_dict


class UserRole:
    SUPER_USER = 0
    COMMON_USER = 1
    ROLE_CHOICES = (
        (SUPER_USER, "管理员"),
        (SUPER_USER, "普通用户"),
    )


class UserGender:
    MAN = 0
    WOMAN = 1
    SECRET = 2
    GENDER_CHOICES = (
        (MAN, "男"),
        (WOMAN, "女"),
        (SECRET, "保密"),
    )


class User(Base):
    # 真实姓名
    name = models.CharField(max_length=64, blank=True, null=True)
    # 昵称
    nick_name = models.CharField(max_length=64)
    # 性别
    gender = models.IntegerField(choices=UserGender.GENDER_CHOICES, default=UserGender.SECRET)
    # 电话
    phone = models.CharField(max_length=16, blank=True, null=True)
    # 邮箱
    e_mail = models.CharField(max_length=64, blank=True, null=True)
    # 年龄
    age = models.IntegerField(blank=True, null=True)
    # 生日
    birth_day = models.CharField(max_length=8, blank=True, null=True)
    # 所在地
    city = models.CharField(max_length=32, blank=True, null=True)
    # 国家
    country = models.CharField(max_length=64, blank=True, null=True)
    # 用户角色
    role = models.IntegerField(choices=UserRole.ROLE_CHOICES, default=UserRole.COMMON_USER)

    def __str__(self):
        return self.nick_name
    
    def to_dict(self):
        return model_to_dict(self)