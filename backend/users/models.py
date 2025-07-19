from django.db import models
from django.contrib.auth.models import User

class Animal(models.Model):
    MALE = 'M'
    FEMALE = 'F'
    SEX_CHOICES = [(MALE, 'Macho'), (FEMALE, 'Fêmea')]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sex = models.CharField(max_length=1, choices=SEX_CHOICES)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.get_sex_display()} - {self.weight}kg"
