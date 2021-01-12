// Change the current tab's url to its libproxy equivalent

document.addEventListener('DOMContentLoaded', function() {
    var libpButton = document.getElementById('fixUrl');
    libpButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            // Get current tab URL and ID
            chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs =>{
                let url = tabs[0].url;
                let id = tabs[0].id; 
                processUrl(url, id);
            });

            // Process the URL and go to the new address
            function processUrl(url, id){
                url = url.replace(/^https?:\/\//,''); // remove http or https
                url = url.split(/\/(.+)/);            // split by the first slash to get base url
                end = url[1];
                base = url[0].split(".");
                final = "https://" + base.join("-") + ".libproxy.aalto.fi" + "/" + end;
                console.log(final)
                chrome.tabs.update(id, {url: final});
            };
      });
    }, false);
  }, false);