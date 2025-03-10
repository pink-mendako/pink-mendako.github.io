(function(){//easter egg

//html design
document.addEventListener('contextmenu', event => event.preventDefault());
window.ondragstart = function() {return false}
//document.querySelector(".home-header.home").addEventListener("click", function(){goToUrl("index.html");});

fetch('footer.html')
.then(response => {
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.text();
})
.then(data => {
	document.getElementById('footer').innerHTML = data;
	document.querySelector(".author-card .icon").addEventListener("click", function(){goToUrl("https://x.com/pink_mendako");});
	document.querySelector(".social-media .twitterx").addEventListener("click", function(){goToUrl("https://x.com/pink_mendako");});
	document.querySelector(".social-media .instagram").addEventListener("click", function(){goToUrl("https://www.instagram.com/pink_mendako/");});
	//mouseover event
	let parentDiv = document.querySelector('.mendako-header');
	parentDiv.addEventListener('mouseover', function(){
		parentDiv.className = 'mendako-header hide';
	});
	parentDiv.addEventListener('mouseout', function handleLangMouseOut() {
		parentDiv.className = 'mendako-header show';
	});
	(adsbygoogle = window.adsbygoogle || []).push({});
})
.catch(error => {
	console.error('There was a problem with the fetch operation:', error);
});


	
function openNewWindw(url){
	window.open(url);
}
function goToUrl(url){
	window.location.href = url;
}

})();