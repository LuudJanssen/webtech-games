from .models import Game, Highscore
from rest_framework import serializers


# Serializers define the API representation.
class GameSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'


class HighscoreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Highscore
        fields = '__all__'
