chrome.extension.onConnect.addListener(function(port) {
  if (port.name != 'XHRProxy_')
    return;
  port.onMessage.addListener(function(xhrOptions) {
    var xhr = new XMLHttpRequest();
    xhr.open(xhrOptions.method || "GET", xhrOptions.url, true);
    xhr.onreadystatechange = function() {
      if (this.readyState == 4) {
        port.postMessage({
          status : this.status,
          data   : this.responseText,
          xhr    : this
        });
      }
    }
    xhr.send();
  });
});
