var a = document.getElementsByClassName("actorPhoto");
var b = document.getElementsByClassName("actorName"); 

for (var i = 0; i < a.length; i++) {
	a[i].style.position = 'relative'; 
	a[i].innerHTML += '<div style="background: #f00; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"></div>';
}

for (var i = 0; i < b.length; i++) {
	b[i].style.position = 'relative'; 
	b[i].innerHTML += '<div style="background: #f00; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"></div>';
}