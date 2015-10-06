document.addEventListener('DOMContentLoaded', function(){
	var bookmarkMeButton = document.getElementById("bookmarkMe");
	bookmarkMeButton.addEventListener('click', function(){
		chrome.tabs.getSelected(null, function(tab) {
			alert(tab.url);
			return false;
		});
	}, false);
}, false);