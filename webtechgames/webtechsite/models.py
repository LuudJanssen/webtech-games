from django.db import models
from django.utils import timezone


class Game(models.Model):
    gameId = models.TextField()
    name = models.TextField()
    description = models.TextField()
    location = models.TextField()
    genre = models.TextField()
    timesPlayed = models.IntegerField(blank=True, null=True)
    dateAdded = models.DateTimeField(default=timezone.now)


class Highscore(models.Model):
    username = models.TextField()
    userId = models.TextField()
    highscore = models.IntegerField(blank=True, null=True)
    date = models.DateTimeField(default=timezone.now)
