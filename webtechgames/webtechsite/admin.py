from django.contrib import admin
from .models import Game, Highscore

admin.site.register(Game, Highscore)
# Register your models here.
