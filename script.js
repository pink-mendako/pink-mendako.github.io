(function(){//easter egg
console.log("\"Seem you are a developer\" -- from a notice is held by pink mendako.");

//html design
document.addEventListener('contextmenu', event => event.preventDefault());
window.ondragstart = function() {return false}
//document.querySelector('.balls-card').addEventListener("click", function(){goToUrl('./balls')});
document.querySelector(".author-card .icon").addEventListener("click", function(){goToUrl("https://x.com/pink_mendako");});

//document.querySelector(".mendako-page").addEventListener("click", function(){goToUrl('./mendako')});

function goToUrl(url){
	window.location.href = url;
}
function openNewWindw(url){
	window.open(url);
}

//mouseover event
let parentDiv = document.querySelector('.mendako-header');
parentDiv.addEventListener('mouseover', function(){
	parentDiv.className = 'mendako-header hide';
});
parentDiv.addEventListener('mouseout', function handleLangMouseOut() {
	parentDiv.className = 'mendako-header show';
});



})();