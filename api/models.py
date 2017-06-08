from django.db import models
from django.utils.translation import ugettext as _
from django.utils.safestring import mark_safe
from easy_thumbnails.fields import ThumbnailerImageField
from easy_thumbnails.files import get_thumbnailer

from api.utils import upload_directory_path


class Gallery(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

    class Meta:
        verbose_name_plural = _('Galleries')

    def __str__(self):
        return self.title


class GalleryImage(models.Model):
    image = ThumbnailerImageField(upload_to=upload_directory_path)
    title = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    position = models.IntegerField(default=0)
    gallery = models.ForeignKey(Gallery, on_delete=models.CASCADE, related_name='gallery_images')

    class Meta:
        ordering = ['position']

    @property
    def thumbnail(self):
        return get_thumbnailer(self.image)['thumbnail']

    def thumbnail_image_tag(self):
        return mark_safe('<img src="{}" />'.format(self.thumbnail.url))
    thumbnail_image_tag.short_description = _('Preview')

    def __str__(self):
        if self.title:
            return self.title
        return _('Untitled image')
