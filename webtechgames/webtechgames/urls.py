from django.conf.urls import url, include
from webtechsite import views
from rest_framework import routers
from django.contrib import admin


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'games', views.GameViewSet)
router.register(r'highscore', views.HighscoreViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^$', views.index, name='index'),
    url(r'^register/$', views.UserFormView.as_view(), name='register'),
]