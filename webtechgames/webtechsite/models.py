from django.db import models
from django.utils import timezone


class Game(models.Model):
    gameId = models.CharField(max_length=20)
    name = models.CharField(max_length=20)
    description = models.TextField()
    location = models.CharField(max_length=50)
    genre = models.TextField()
    dateAdded = models.DateTimeField(default=timezone.now)
    timesPlayed = models.IntegerField(blank=True, null=True)


class Highscore(models.Model):
    username = models.CharField(max_length=20)
    userId = models.CharField(max_length=20)
    highscore = models.IntegerField(blank=True, null=True)
    date = models.DateTimeField(default=timezone.now)
