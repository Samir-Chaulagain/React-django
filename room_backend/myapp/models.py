from django.db import models
import string
import random


def generate_unique_code():
    length=6
    while True:
        code=''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count()==0:
            break
    return code
# Create your models here
# Room models .
class Room(models.Model):
    code=models.CharField(max_length=8, default=generate_unique_code,unique=True)
    # HANDLE HOST BY SESSION KEY
    host=models.CharField(max_length=50, unique=True)
    guest_pause=models.BooleanField(null=False, default=False)
    skip_votes=models.IntegerField(null=False,default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    # def is_host_this(host)

    