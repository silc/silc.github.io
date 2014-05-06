$(function(){
	/* Select correct download button based on platform */
	var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
	/*
	var isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
	var isLinux = navigator.platform.toUpperCase().indexOf('LINUX')!==-1
	var isiPad = navigator.platform.toUpperCase().indexOf('IPAD')!==-1
	var isiPhone = navigator.platform.toUpperCase().indexOf('IPHONE')!==-1
	var isAndroid = navigator.userAgent.toUpperCase().indexOf('ANDROID')!==-1
	*/

	document.getElementById('default').style.display = 'none';
	if (isWindows) {
    		document.getElementById('windows').style.display = 'block';
	} else {
		document.getElementById('default').style.display = 'block';
	}

	/* Scrambled text */
	document.getElementById('container').style.visibility = 'visible';
        var container = $("#container")
//	container.shuffleLetters({"text": "Security is not an add-on!"});
//	setTimeout(function(){
		container.shuffleLetters({"text": "Secure Internet Live Conferencing."});
//	}, 2500);
});

