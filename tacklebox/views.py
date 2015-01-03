from django.shortcuts import render_to_response
from django.template import RequestContext, loader
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.core.mail import send_mail
import hmac
import hashlib
import base64
import string
import urllib
import requests
import json
from forms import ContactForm
from django.core.mail import send_mail


def index(request):
    return render_to_response('index.html')

def contact(request):
    return render_to_response('contact.html')

def thankyou(request):
    return render_to_response('thankyou.html')

def receipt(request):
    return render_to_response('receipt.html')

def failed(request):
    return render_to_response('failed.html')

def rooms(request):
	# if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = ContactForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
         	fullName = form.cleaned_data['fullName']
         	eventDate = form.cleaned_data['eventDate']
         	guestNum = form.cleaned_data['guestNum']
         	phoneNumber = form.cleaned_data['phoneNumber']
         	sender= form.cleaned_data['sender']
         	recipients = ["eventcoordinator@oesrestaurant.com"]
         	subject = "Private Event Inquiry from " + fullName
         	message = 	"Name: \n" + fullName + "\n\n" + "Event Date: \n" + eventDate + "\n\n" + "Guest Number: \n" + guestNum + "\n\n" + "Phone Number: \n" + phoneNumber + "\n\n" + "Email Address: \n" + sender + "\n\n" 
         	if send_mail(subject, message, sender, recipients, fail_silently=False):
         		return HttpResponseRedirect('/thankyou/')
         	return HttpResponseRedirect('/failure/')         	
    # if a GET (or any other method) we'll create a blank form
    else:
        form = ContactForm()
    return render(request, 'rooms.html', {'form': form})

def about(request):
    return render_to_response('about.html')

def gallery(request):
    return render_to_response('gallery.html')

def giftcards(request):
    return render_to_response('giftcards.html')

def reservations(request):
    return render_to_response('reservations.html')

def menu(request):
	####single platform sign request####
	def urlSign( uri_path, params, client_id, secret ):
		padding_factor = ( 4 - len( secret ) % 4 ) % 4
		secret += "=" * padding_factor
		binary_key = base64.b64decode(unicode(secret).translate(dict(zip(map(ord, u'-_'), u'+/'))))
		# construct URI for signing
		uri_path_params = uri_path + '?'
		first = True
		for k in params.keys():
			if not first:
				uri_path_params += '&'
			else:
				first = False
			uri_path_params += "%s=%s" % ( k, urllib.quote_plus( params[k] ) )
		uri_path_params += 'client=' + client_id
		# Sign
		digest = hmac.new(binary_key, uri_path_params, hashlib.sha1).digest()
		digest = base64.b64encode( digest )
		digest = digest.translate(string.maketrans('+/', '-_'))
		return "%s&sig=%s" % ( uri_path_params, digest.rstrip('=') )
	
	#get signed url from spSign function above
	signed = 'http://api.singleplatform.co' + urlSign( '/locations/oregon-electric-station/menu', {}, 'c3sbrpbtkbs5gverurfkxpemc', 'PkkJXNRpO2l0r5u6u0PlCNme1KA8akGejMIjHI5Gkj8' )
	
	#make get request
	r = requests.get(signed)

	#prepare response data
	response_data = r.json()
	#response_data['menus'] = r.json()

	return render_to_response('menu.html',{'menu_data':json.dumps(response_data)})

    