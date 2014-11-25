from django.shortcuts import render_to_response
from django.template import RequestContext, loader
from django.http import HttpResponseRedirect
from scripts import spSign
import requests, json

def index(request):
    return render_to_response('index.html')

def contact(request):
    return render_to_response('contact.html')

def menu(request):
	
	url = 'http://api.singleplatform.co' + urlSign( '/locations/oregon-electric-station/menu', {}, 'c3sbrpbtkbs5gverurfkxpemc', 'PkkJXNRpO2l0r5u6u0PlCNme1KA8akGejMIjHI5Gkj8' )
	r = requests.get(url)
	newmenu = r.json()

	return render_to_response('menu.html', newmenu)