"use strict";

var url = "";

chrome.storage.sync.get({
	enabled: false,
	url: "https://i.kym-cdn.com/photos/images/newsfeed/002/069/850/076.jpg"
}, function(items) {
	if (items.enabled && document.body.innerHTML.search("Brenton Hall") > 0) {
		// adds the url variable from chrome memory to local memory for extenstion
		url = items.url

		// gets the profile image from the page if it is a profile page
		var bm = document.getElementsByClassName("fs-exclude avatar")

		// Time delay to let the JQuery load in the annoucement list
		setTimeout(function(){
			// gets all the images that have brenton's name
			var sm = document.getElementsByName("Brenton Hall")

			// go though the list of brenton's annoucements
			for (let x in sm){
				// replaces each image with brentons name
				sm[x].style.backgroundImage = "url(" + url + ")"
			}
		}, 1000);
		
		// Use the try/catch to allow the mini icons to be replaced if not on the profile page
		try{
			// replaces the image on a profile page
			bm[0].style.backgroundImage = "url(" + url + ")"
		}
		catch{
			// standard error message for no profile image - needed to not fail the try/catch loop
			console.log("no big profile image")
		}
	}
});