from rest_framework import serializers
from servapp.models import *

class DetailSerialiser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id","first_name","last_name","email","contact","gender","password","username")
        
class TodoSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = '__all__'