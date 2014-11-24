// function createRequest() {
//   var result = null;
//   if (window.XMLHttpRequest) {
//     // FireFox, Safari, etc.
//     result = new XMLHttpRequest();
//     if (typeof xmlhttp.overrideMimeType != 'undefined') {
//       result.overrideMimeType('text/xml'); // Or anything else
//     }
//   }
//   else if (window.ActiveXObject) {
//     // MSIE
//     result = new ActiveXObject("Microsoft.XMLHTTP");
//   } 
//   else {
//     // No known mechanism -- consider aborting the application
//   }
//   return result;
// }

// var req = createRequest(); // defined above
// // Create the callback:
// req.onreadystatechange = function() {
//   if (req.readyState != 4) return; // Not there yet
//   if (req.status != 200) {
//     // Handle request failure here...
//     return;
//   }
//   // Request successful, read the response
//   var resp = req.responseText;
//   // ... and use it as needed by your app.
// }

// req.open("GET", url, true);
// req.send();

// req.open("POST", url, true);
// req.setRequestHeader("Content-Type",
//                      "application/x-www-form-urlencoded");
// req.send(form-encoded request body);

// var strJSON = '{"result":true,"count":1}';
// var objJSON = eval("(function(){return " + strJSON + ";})()");
// alert(objJSON.result);
// alert(objJSON.count);

$.getJSON(url, function (json) {
    alert(json.result);
    $.each(json.list, function (i, fb) {
        alert(fb.result);
    });
});