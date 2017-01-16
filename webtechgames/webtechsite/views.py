from django.contrib.auth import authenticate, login
from django.contrib.auth import logout
from django.shortcuts import render, redirect
from django.views import generic
from django.views.generic import View
from .forms import UserForm
from .models import Game, Highscore
from rest_framework import viewsets
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

            # if user is not None:
            #
            #     if user.is_active:
            #         login(request, user)
            #         return redirect('http://127.0.0.1:8000/register/')

        return render(request, self.template_name, {'form':form})


# def logout_user(request):
#     logout(request)
#     form = UserForm(request.POST or None)
#     context = {
#         "form": form,
#     }
#     return render(request, '/../mockupViews/landing/index.html', context)

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


def index(request):
        return render(request, 'webtechsite/index.html')