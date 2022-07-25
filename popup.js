// Change the current tab's url to its libproxy equivalent

/**
 * Process the URL according to mode parameter
 * 
 * @param {string} url Complete URL sent for processing
 * @param {number} id Chrome active tab ID
 * @param {string} mode "unlock" for opening via libproxy, "revert" for going back
 * @returns {string} Final processed URL 
 */
function processUrl(url, id, mode){
    url = url.replace(/^https?:\/\//,''); // remove http or https
    url = url.split(/\/(.+)/);            // split by the first slash to get base url
    if (mode == "unlock") {
        final = "https://" + url[0].replaceAll(".", "-") + ".libproxy.aalto.fi" + "/" + url[1];
    } else {
        final = "https://" + url[0].replace(".libproxy.aalto.fi","").replaceAll("-",".") + "/" + url[1];
    }

    return final;
};

/**
 * Change the active tab to the URL processed based on the mode parameter
 * 
 * @param {string} mode "unlock" for opening via libproxy, "revert" for going back
 */
function tabUpdater(mode){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs =>{
        let url = tabs[0].url;
        let id = tabs[0].id;
        final = processUrl(url, id, mode);

        chrome.tabs.update(id, {url: final});
        window.close();
    });
}

// Set the tabUpdater listeners for popup buttons
document.addEventListener('DOMContentLoaded', function() {
    const libpButton = document.getElementById('fixUrl');
    libpButton.addEventListener('click', tabUpdater.bind(null, "unlock"));
    
    const revertButton = document.getElementById('revert');
    revertButton.addEventListener('click', tabUpdater.bind(null, "revert"));
}, false);