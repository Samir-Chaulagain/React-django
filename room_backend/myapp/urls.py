
from django.urls import path
from .views import RoomView,CreateRoomView,GetRoom,JoinRoom,LeaveRoom,UpdateRoom,UserInRoom

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room',CreateRoomView.as_view()), # Make sure this points to a valid view
    path('get-room',GetRoom.as_view()), # Make sure this points to a valid view
    path('join-room', JoinRoom.as_view()),
    path("leave-room",LeaveRoom.as_view()),
    path('update-room', UpdateRoom.as_view()),
    path('user-in-room', UserInRoom.as_view()),
]