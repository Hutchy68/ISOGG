function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function checkCookie() {
    var cookieCheck = getCookie("cookieconsent_status");
	window.alert = null;
    if (cookieCheck != "" && cookieCheck == 'allow') {
        var scriptElement = document.createElement('script');
		scriptElement.type = 'text/javascript';
		scriptElement.async = true;
		scriptElement.src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-50f7269b339fed7f';
		// the //example.com makes sure it will work on both http and https
		var body = document.getElementsByTagName('body')[0];
	    body.appendChild(scriptElement);
    }
}

window.addEventListener("load", checkCookie, false);