window.onload = function() {
  var loading = document.getElementById("loading");
	setInterval(function() {
		loading.classList.add("loading-done");
	}, 1000);
}
