import hmac
import hashlib
import base64
import string
import urllib

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


print 'http://api.singleplatform.co' + urlSign( '/locations/oregon-electric-station/menu', {}, 'c3sbrpbtkbs5gverurfkxpemc', 'PkkJXNRpO2l0r5u6u0PlCNme1KA8akGejMIjHI5Gkj8' )


