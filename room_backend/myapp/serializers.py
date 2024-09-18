from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id','code','host','guest_pause','skip_votes','created_at')



# Send Post request to end-point,
#Data Send in PayLoad 

#mAKE SERIALIZER  INCOMING ONE TO HANDE REQUEST OR TO oUTGOINIG  ONE TO HANDLE RESPONSE

class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model =Room
        fields =("skip_votes","guest_pause")
