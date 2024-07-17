from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, permissions, viewsets
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import permissions
from .models import Inmate
from .serializers import InmateSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Inmate, User
from .serializers import (
    RegisterSerializer, 
    UserSerializer, 
    CustomTokenObtainPairSerializer, 

    InmateSerializer
)

import logging

logger = logging.getLogger(__name__)

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

class ProfileView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
    permission_classes = [permissions.AllowAny]

class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            request.user.auth_token.delete()
        except Exception as e:
            logger.error(f"Logout error: {e}")
        return Response(status=204)

'''
class InmateViewSet(viewsets.ModelViewSet):
    queryset = Inmate.objects.all()
    serializer_class = InmateSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user if self.request.user.is_authenticated else None)

    @action(detail=True, methods=['put'], url_path='update')
    def update_inmate(self, request, pk=None):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=False)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    @action(detail=True, methods=['delete'], url_path='delete')
    def delete_inmate(self, request, pk=None):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
'''

class InmateViewSet(viewsets.ModelViewSet):
    queryset = Inmate.objects.all()
    serializer_class = InmateSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user if self.request.user.is_authenticated else None)

    @action(detail=True, methods=['put'], url_path='update')
    def update_inmate(self, request, pk=None):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)

        # Handle image upload
        image = request.FILES.get('image', None)
        if image:
            instance.image = image
            instance.save()

        self.perform_update(serializer)
        return Response(serializer.data)

    @action(detail=True, methods=['delete'], url_path='delete')
    def delete_inmate(self, request, pk=None):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)