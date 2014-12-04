from django import forms


class ContactForm(forms.Form):
    fullName = forms.CharField(max_length=128, label='Full Name')
    eventDate = forms.CharField(max_length=32, label='Event Date')
    guestNum = forms.CharField(max_length=10, label='Guest Number')
    phoneNumber = forms.CharField(max_length=20, label='Phone Number')
    sender = forms.EmailField(label='Email Address')