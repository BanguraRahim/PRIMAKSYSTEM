from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, ProfileView, CustomTokenObtainPairView, LogoutView

from django.urls import path, include
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InmateViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InmateViewSet

router = DefaultRouter()
router.register(r'inmates', InmateViewSet, basename='inmate')










urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('api/', include(router.urls)),
    path('api/inmates/<int:pk>/update/', InmateViewSet.as_view({'put': 'update'}), name='inmate-update'),
    path('api/inmates/<int:pk>/delete/', InmateViewSet.as_view({'delete': 'destroy'}), name='inmate-delete'),







    # UPDATE PROFILE URLS


    # THE COUNT URL







]