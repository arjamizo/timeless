from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.utils.safestring import mark_safe
from easy_thumbnails.fields import ThumbnailerImageField
from easy_thumbnails.files import get_thumbnailer

from api.utils import upload_directory_path


class Gallery(models.Model):
    title = models.CharField(_('title'), max_length=255)
    description = models.TextField(_('description'))
    position = models.IntegerField(_('position'), default=0)
    published = models.BooleanField(_('published'), default=False)

    class Meta:
        verbose_name_plural = _('Galleries')
        verbose_name = _('Gallery')
        ordering = ['position']

    def __str__(self):
        return str(self.title)


class GalleryImage(models.Model):
    image = ThumbnailerImageField(_('image'), upload_to=upload_directory_path)
    title = models.CharField(_('title'), max_length=255, blank=True, null=True)
    description = models.TextField(_('description'), blank=True, null=True)
    position = models.IntegerField(_('position'), default=0)
    gallery = models.ForeignKey(Gallery, on_delete=models.CASCADE, related_name='gallery_images',
                                verbose_name=_('gallery'))

    class Meta:
        verbose_name_plural = _('Gallery images')
        verbose_name = _('Gallery image')
        ordering = ['position']

    @property
    def thumbnail(self):
        return get_thumbnailer(self.image)['thumbnail']

    def thumbnail_image_tag(self):
        return mark_safe('<img src="{}" />'.format(self.thumbnail.url))
    thumbnail_image_tag.short_description = _('Preview')

    def __str__(self):
        if self.title:
            return str(self.title)
        return str(_('Untitled image'))
