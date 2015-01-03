from django.conf.urls import patterns, include, url
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',

    # Home Page
    (r'^$', 'tacklebox.views.index'),

    # Contact page
    url(r'^index/$', 'tacklebox.views.index'),

    # Contact page
    url(r'^contact/$', 'tacklebox.views.contact'),

    # Gift Cards page
    url(r'^giftcards/$', 'tacklebox.views.giftcards'),

    # Gift Cards page
    url(r'^giftcards2/$', 'tacklebox.views.giftcards2'),

    # Events page
    url(r'^rooms/$', 'tacklebox.views.rooms'),

    # Receipt page
    url(r'^receipt/$', 'tacklebox.views.receipt'),

    # Thank you page
    url(r'^thankyou/$', 'tacklebox.views.thankyou'),

     #Email Failure page
    url(r'^failed/$', 'tacklebox.views.failed'),   

    # About page
    url(r'^about/$', 'tacklebox.views.about'),

    # Reservations page
    url(r'^reservations/$', 'tacklebox.views.reservations'),

    # Photo Gallery page
    url(r'^gallery/$', 'tacklebox.views.gallery'),

    # Menu Page
    url(r'^menu/$', 'tacklebox.views.menu'),

    # Default Django Home Page
    url(r'^admin/', include(admin.site.urls)),

)
