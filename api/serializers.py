from rest_framework import serializers

from api.models import GalleryImage, Gallery


class GalleryImageSerializer(serializers.ModelSerializer):
    thumbnail = serializers.ImageField()
    thumbnail_dimensions = serializers.DictField()

    class Meta:
        model = GalleryImage
        fields = ('id', 'title', 'description', 'image', 'thumbnail', 'thumbnail_dimensions')


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ('id', 'title', 'description')


class GalleryDetailsSerializer(serializers.ModelSerializer):
    gallery_images = GalleryImageSerializer(many=True)

    class Meta:
        model = Gallery
        fields = ('id', 'title', 'description', 'gallery_images')