var a = document.getElementsByClassName("actorPhoto");
var b = document.getElementsByClassName("passiveName");

var links = new Array();
var colors = new Array();
colors[0] = "red";
colors[1] = "blue";
colors[2] = "green";
colors[3] = "yellow";
colors[4] = "purple";
colors[5] = "orange";

var colorcounter = 0;

for (var i = 0; i < 5; i++) {
	a[i].style.position = 'relative'; 
	a[i].innerHTML += '<div style="background: '+colors[colorcounter]+'; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"></div>';
	
	links[a[i].href] = colors[colorcounter];
	
	colorcounter++;
}

for (var i = 0; i < 5; i++) {
	b[i].style.position = 'relative'; 
	b[i].innerHTML += '<div style="background: '+links[a[i].href]+'; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"></div>';
}

console.log(links);