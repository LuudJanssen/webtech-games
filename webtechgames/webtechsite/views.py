from django.contrib.auth import authenticate, login
from django.contrib.auth import logout
from django.shortcuts import render
from .forms import UserForm
from .models import Game, Highscore
from rest_framework import viewsets,
from .serializers import GameSerializer, HighscoreSerializer

def logout_user(request):
    logout(request)
    form = UserForm(request.POST or None)
    context = {
        "form": form,
    }
    return render(request, '/../mockupViews/landing/index.html', context)


def login_user(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return render(request, '/../mockupViews/landing/index.html')
            else:
                return render(request, '/../mockupViews/landing/index.html', {'error_message': 'Your account has been disabled'})
        else:
            return render(request, '/../mockupViews/landing/index.html', {'error_message': 'Invalid login'})
    return render(request, '/../mockupViews/landing/index.html')


def register(request):
    form = UserForm(request.POST or None)
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
                return render(request, '/../mockupViews/landing/index.html')
    context = {
        "form": form,
    }
    return render(request, '/../mockupViews/landing/index.html', context)

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
