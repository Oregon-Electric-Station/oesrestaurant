from django.shortcuts import render_to_response
from django.template import RequestContext, loader
from django.http import HttpResponseRedirect

def index(request):
    return render_to_response('index.html')