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

def index(request):
    return render_to_response('index.html')

def contact(request):
    return render_to_response('contact.html')

def thankyou(request):
    return render_to_response('thankyou.html')

def events(request):
	# if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = ContactForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
         	subject = form.cleaned_data['subject']
         	message = form.cleaned_data['message']
         	sender = form.cleaned_data['sender']
         	cc_myself = form.cleaned_data['cc_myself']
         	recipients = ['mrhebeler@gmail.com']
         	if cc_myself:
         		recipients.append(sender)

         	send_mail(subject, message, sender, recipients)
         	return HttpResponseRedirect('/thankyou/')
    
    # if a GET (or any other method) we'll create a blank form
    else:
        form = ContactForm()
    return render(request, 'events.html', {'form': form})

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

	return render_to_response('newmenu.html',{'menu_data':json.dumps(response_data)})

    