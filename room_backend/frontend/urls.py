
from django.urls import path

from .views import index

urlpatterns = [
    path('', index),
     # Include hello app's URLs
]
