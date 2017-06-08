from rest_framework import viewsets

from api.models import GalleryImage, Gallery
from api.serializers import GalleryImageSerializer, GallerySerializer


class GalleryImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer


class GalleryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Gallery.objects.filter(published=True)
    serializer_class = GallerySerializer
