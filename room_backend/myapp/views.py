from rest_framework import generics,status
from .models import Room
from .serializers import RoomSerializer,CreateRoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response


class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        # aCCESS SESSION ID
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            skip_votes=serializer.data.get("skip_votes")
            guest_pause=serializer.data.get("guest_pause")
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room= queryset[0]
                room.guest_pause=guest_pause
                room.skip_votes=skip_votes
                room.save(update_fields=["guest_pause","skip_votes"])
                return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)
            else:
                room = Room(host=host, guest_pause=guest_pause,
                            skip_votes=skip_votes)
                room.save()
                return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)