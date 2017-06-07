from django.conf.urls import url, include
from rest_framework import routers

from api.views import GalleryImageViewSet, GalleryViewSet


router = routers.DefaultRouter()
router.register(r'gallery_images', GalleryImageViewSet)
router.register(r'galleries', GalleryViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
]
