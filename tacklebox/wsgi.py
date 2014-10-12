"""
WSGI config for tacklebox project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/howto/deployment/wsgi/
"""

from django.core.wsgi import get_wsgi_application
from dj_static import Cling

application = Cling(get_wsgi_application())

import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "tacklebox.settings")

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()