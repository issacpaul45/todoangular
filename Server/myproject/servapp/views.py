from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from servapp.models import User,Tasks
from servapp.serializers import DetailSerialiser,TodoSerialiser
from rest_framework import status



# Create your views here.

@api_view(['POST'])
def register(request):
    print(request.data)
    person = DetailSerialiser(data=request.data)
    if person.is_valid():
        person.save()
        return Response({'status':1,"values":person.data})
    else:
        return Response({'status':0,"values":"faield"})
    
@api_view(['POST'])
def log123(request):
    print(request.data)
    username = request.data.get("username")
    password = request.data.get("password")
    # user = authenticate(username=username, password=password)
    user = User.objects.get(username=username, password=password)
    print(user,"-------------")
    if user is not None:
        user_data = DetailSerialiser(user).data
        return Response({'status': 1, 'values': user_data})
    else:
        return Response({'status': 0, 'values': "Login failed. Invalid credentials"})

@api_view(['POST'])
def add_to_do(request):
    print(request.data)
    todo = TodoSerialiser(data=request.data)
    if todo.is_valid():
        todo.save()
        return Response({'status':1,"values":todo.data})
    else:
        return Response({'status':0,"values":"faield"})
    
@api_view(['GET'])
def view_to_do(request):
    if request.query_params:
        todo = Tasks.objects.filter(**request.query_params.dict())
    if todo:
        todotable = TodoSerialiser(todo,many=True)
        return Response({'data':todotable.data})
    else:
        return Response({'data':"no data"})

@api_view(['DELETE'])
def deletetask(request,id):
    task = Tasks.objects.get(pk=id)
    task.delete()
    return Response({'status':1,"values":"deleted"})

@api_view(['POST','GET'])
def updatetask(request):
    if request.method=='POST':
        print(request.data)
        task = Tasks.objects.get(pk=request.data['id'])
        tododata = TodoSerialiser(instance = task,data=request.data)
        if tododata.is_valid():
            tododata.save()
            return Response({'data':tododata.data})
    else:
        if request.query_params:
            todo = Tasks.objects.get(**request.query_params.dict())
        if todo:
            todotable = TodoSerialiser(todo)
            return Response({'data':todotable.data})
        
@api_view(['GET'])
def view_completed_to_do(request,user,s):
    todo = Tasks.objects.filter(user=user,status=s)
    if todo:
        todotable = TodoSerialiser(todo,many=True)
        return Response({'data':todotable.data})
    else:
        return Response({'data':"no data"})