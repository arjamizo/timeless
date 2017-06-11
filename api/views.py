from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response

from api.models import GalleryImage, Gallery
from api.serializers import GalleryImageSerializer, GallerySerializer, GalleryDetailsSerializer


class GalleryImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer


class GalleryViewSet(viewsets.ReadOnlyModelViewSet):

    def list(self, request):
        serializer = GallerySerializer(Gallery.objects.filter(published=True), many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        gallery = get_object_or_404(Gallery.objects.filter(published=True), pk=pk)
        serializer = GalleryDetailsSerializer(gallery)
        return Response(serializer.data)
