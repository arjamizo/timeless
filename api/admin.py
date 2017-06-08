from django.contrib import admin

import api.models as models


class GalleryImageAdmin(admin.ModelAdmin):
    readonly_fields = ('thumbnail_image_tag',)


class GalleryImageInline(admin.StackedInline):
    model = models.GalleryImage
    extra = 1
    readonly_fields = ('thumbnail_image_tag',)


class GalleryAdmin(admin.ModelAdmin):
    inlines = (GalleryImageInline,)


admin.site.register(models.GalleryImage, GalleryImageAdmin)
admin.site.register(models.Gallery, GalleryAdmin)
