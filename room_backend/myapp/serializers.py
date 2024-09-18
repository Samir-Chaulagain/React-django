from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id','code','host','guest_pause','skip_votes','created_at')



# Send Post request to end-point,
#Data Send in PayLoad 
# class CreateRoomSerializer(serializers.ModelSerializer):
#     class Meta:
#         model =Room
#         fields =("")
