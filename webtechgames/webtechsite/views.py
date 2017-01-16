from .models import Game, Highscore
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import GameSerializer, HighscoreSerializer


# ViewSets define the view behavior.
class GameViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows game data to be viewed or edited.
    """
    queryset = Game.objects.all().order_by('-dateAdded')
    serializer_class = GameSerializer


class HighscoreViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows highscore data to be viewed or edited.
    """
    queryset = Highscore.objects.all()
    serializer_class = HighscoreSerializer

@api_view(['GET', 'POST'])
def game_list(request):
    """
    List all games, or create a new one
    """
    if request.method == 'GET':
        games = Game.object.all()
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GameSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)