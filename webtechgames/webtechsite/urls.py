from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from webtechsite import views

router = DefaultRouter()
router.register(r'users', views.UserViewset)
router.register(r'groups', views.GroupViewSet)
#auto-url routing

urlpatterns = [
    # url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^login_user/$', views.login_user, name='login_user'),
    url(r'^logout_user/$', views.logout_user, name='logout_user'),
    url(r'^', include('webtechsite.urls')),
]
