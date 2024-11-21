from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    contact = models.IntegerField()
    gender  = models.CharField(max_length=20)




class Tasks(models.Model):
    taskname = models.CharField(max_length=20)
    taskdesc = models.CharField(max_length=50)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    status = models.IntegerField(default=0)

    