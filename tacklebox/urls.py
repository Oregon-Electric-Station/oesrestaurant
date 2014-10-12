from django.conf.urls import patterns, include, url
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',

    # Home Page
    (r'^$', 'tacklebox.views.index'),

    # Default Django Home Page
    url(r'^admin/', include(admin.site.urls)),

)
