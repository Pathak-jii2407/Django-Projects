# models.py
from django.db import models
import datetime as dt
from . import mysql_data



class Subscription(models.Model):
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)
    
    def __init__(self,email,password):
        self.email=email
        self.password=password

    def __str__(self):
        return self.email
    
    def wish_():
        time=dt.datetime.now().hour
        wish=''
        if time>1 and time<12:
            wish='Good Morning!'
        elif time>12 and time<15:
            wish='Good Evening!'
        else:
            wish='Good Afternoon!'
        return wish
    def send_to_index(self):
        data = mysql_data.get_data(self.email,self.password)
        return data
    
