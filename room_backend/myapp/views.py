from rest_framework import generics
from .models import Room
from .serializers import RoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response


class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

