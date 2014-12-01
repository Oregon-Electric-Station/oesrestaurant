from django.conf.urls import patterns, include, url
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',

    # Home Page
    (r'^$', 'tacklebox.views.index'),

    # Contact page
    url(r'^contact/$', 'tacklebox.views.contact'),

    # Events page
    url(r'^events/$', 'tacklebox.views.events'),

    # Menu Page
    url(r'^menu/$', 'tacklebox.views.menu'),

    # Default Django Home Page
    url(r'^admin/', include(admin.site.urls)),

)
