// Change the current tab's url to its libproxy equivalent

// Process the URL and go to the new address
function processUrl(url, id, mode){
	url = url.replace(/^https?:\/\//,''); // remove http or https
	url = url.split(/\/(.+)/);            // split by the first slash to get base url
	if (mode == "unlock") {
		final = "https://" + url[0].replaceAll(".", "-") + ".libproxy.aalto.fi" + "/" + url[1];
	} else {
		final = "https://" + url[0].replace(".libproxy.aalto.fi","").replaceAll("-",".") + "/" + url[1];
	}
	chrome.tabs.update(id, {url: final});
	window.close();
};

document.addEventListener('DOMContentLoaded', function() {
    var libpButton = document.getElementById('fixUrl');
    libpButton.addEventListener('click', function() {
		// Get current tab URL and ID
		chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs =>{
			let url = tabs[0].url;
			let id = tabs[0].id;
			processUrl(url, id, "unlock");
		});
    }, false);
	
	var revertButton = document.getElementById('revert');
    revertButton.addEventListener('click', function() {
		// Get current tab URL and ID
		chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs =>{
			let url = tabs[0].url;
			let id = tabs[0].id;
			processUrl(url, id, "revert");
		});
    }, false);
  }, false);