proxyXHR.get('https://cdn.rawgit.com/joshisa/huemix-blopscotch/master/js/inject.js').onSuccess(function (data) {
  eval(data);
}).onFailure(function (status) {
  alert("HTTP Error " + status + " while retrieving data.");
});
