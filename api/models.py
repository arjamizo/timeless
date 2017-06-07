from django.db import models
from django.utils.translation import ugettext as _

from api.utils import upload_directory_path


class Gallery(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

    class Meta:
        verbose_name_plural = _('Galleries')

    def __str__(self):
        return self.title


class GalleryImage(models.Model):
    image = models.ImageField(upload_to=upload_directory_path)
    title = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    position = models.IntegerField(default=0)
    gallery = models.ForeignKey(Gallery, on_delete=models.CASCADE, related_name='gallery_images')

    def __str__(self):
        if self.title:
            return self.title
        return _('Untitled image')
