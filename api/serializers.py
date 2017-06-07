from rest_framework import serializers

from api.models import GalleryImage, Gallery


class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = ('id', 'title', 'description', 'image')


class GallerySerializer(serializers.ModelSerializer):
    gallery_images = GalleryImageSerializer(many=True)

    class Meta:
        model = Gallery
        fields = ('id', 'title', 'description', 'gallery_images')
