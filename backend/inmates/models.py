from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('prison_officer', 'Prison Officer'),
        ('admin', 'Admin'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    full_name = models.CharField(max_length=100)

    def __str__(self):
        return self.username

class Inmate(models.Model):
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    )

    full_name = models.CharField(max_length=100)
    inmate_id = models.CharField(max_length=20, unique=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    date_of_birth = models.DateField()
    crime_committed = models.TextField()
    sentence_year = models.IntegerField()
    image = models.ImageField(upload_to='inmate_images', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # Relationship #1: One-to-Many relationship between User and Inmate
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='inmates', null=True, blank=True)

    def __str__(self):
        return self.full_name