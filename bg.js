// icon from http://www.iconarchive.com/show/origami-birds-icons-by-jozef89/bird-red-2-icon.html

chrome.browserAction.onClicked.addListener(function(tab) {
	  // No tabs or host permissions needed!
	  
	  chrome.tabs.executeScript({
	    code: 'scrollTo(0,0);'
	  });
	});
