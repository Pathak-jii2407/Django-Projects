# views.py
from django.shortcuts import render
from . import mysql_data
from .models import Subscription



def index(request):
    return render(request,'index.html')

def welcome(request):
    data={}
    name=request.POST.get('name','Default')
    email=request.POST.get('email','Default')
    number=request.POST.get('Phone','Default')
    password=request.POST.get('password','Default')
    course=request.POST.get('Courses','Default')
    language=request.POST.get('programming_language','Default')
    wish=Subscription.wish_()
    data={
        'name':name,
        'number':number,
        'email':email,
        'password':password,
        'course':course,
        'language':language,
    }
    if name=='Default' and number=='Default':
        return render(request,'login.html')
    name_=''
    for i in name:
        if i==" ":
            break
        else:
            name_=name_+i
    mysql_data.save_data_to_mysql(data)
    data['name']=name_
    data['wish']=wish
    return render(request,'welcome.html',data)

def existing_account(request):
    email=request.POST.get('email','Default')
    password=request.POST.get('password','Default')    
    if email=="Default" and password=='Default':
        return render(request,'login.html',{'data':'Incorrect Password or email'})
    else:
        global user
        user=Subscription(email,password)
        data=user.send_to_index()
        
        if data==False:
            return render(request, 'login.html', {'data': 'Data Not Found','refresh':'Please Refresh'})
        else:
            return render(request,'welcome.html',data)

def login(request):
    return render(request,'login.html')

def account(request):
    global user
    try:
        data=user.send_to_index()
        return render(request,'account.html',data)
    except:
        return render(request,'login.html',{'login':'Please Login First'})


