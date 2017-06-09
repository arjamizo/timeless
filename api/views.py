from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response

from api.models import GalleryImage, Gallery
from api.serializers import GalleryImageSerializer, GallerySerializer, GalleryDetailsSerializer


class GalleryImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer


class GalleryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Gallery.objects.filter(published=True)

    def list(self, request):
        serializer = GallerySerializer(self.queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        gallery = get_object_or_404(self.queryset, pk=pk)
        serializer = GalleryDetailsSerializer(gallery)
        return Response(serializer.data)
