from django.contrib.auth import authenticate, login
from django.contrib.auth import logout
from django.shortcuts import render, redirect
from django.views import generic
from django.views.generic import View
from .forms import UserForm
from .models import Game, Highscore
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import GameSerializer, HighscoreSerializer


class UserFormView(View):
    form_class = UserForm
    template_name = 'webtechsite/registration_form.html'

    def get(self, request):
        form = self.form_class(None)
        return render(request, self.template_name, {'form' : form})

    def post(self, request):
        form = self.form_class(request.POST)

        if form.is_valid():

            user = form.save(commit=False)

            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user.set_password(password)
            user.save()

            user = authenticate(username=username, password=password)

            if user is not None:

                if user.is_active:
                    login(request, user)
                    return redirect('webtechsite:index')

        return render(request, self.template_name, {'form':form})




def logout_user(request):
    logout(request)
    form = UserForm(request.POST or None)
    context = {
        "form": form,
    }
    return render(request, 'webtechsite:index.html', context)


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