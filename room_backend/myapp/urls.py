
from django.urls import path
from .views import RoomView

urlpatterns = [
    path('home', RoomView.as_view()),  # Make sure this points to a valid view
]