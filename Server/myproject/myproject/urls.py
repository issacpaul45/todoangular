"""
URL configuration for myproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from servapp.views import *
urlpatterns = [
    path("admin/", admin.site.urls),
    path('register/',register,name="register"),
    path('login/',log123),
    path('add_task/',add_to_do),
    path('view_task/',view_to_do),
    path('delete_task/<int:id>',deletetask),
    path('update_task/',updatetask),
    path('view_completed_task/<int:user>/<int:s>/',view_completed_to_do)
    ]
