var a = document.getElementsByClassName("actorPhoto");
var c = document.getElementsByClassName("actorPic");
var b = document.getElementsByClassName("actorName"); // element a inside

var links = new Array();
var colors = new Array(
		"#FFFF66",
		"#FFCCFF",
		"#66CCFF",
		"#336666",
		"#3366FF",
		"#333333",
		"#669900",
		"#6666FF",
		"#00FF99",
		"#00CCFF",
		"#663399",
		"#009933",
		"#660000",
		"#FF3300",
		"#FF6633",
		"#CCFF66",
		"#996666",
		"#996633",
		"#33FFFF",
		"#0066FF",
		"#006666",
		"#003399",
		"#003300",
		"#000066",
		"#339966",
		"#990033",
		"#993333",
		"#CC99CC",
		"#CC9966",
		"#CCFF00",
		"#CCFF99",
		"#FF0066",
		"#660000",
		"#33FF99",
		"#33FF00",
		"#666633",
		"#3333FF",
		"#3366CC",
		"#CC6699",
		"#CC6633",
		"#66CCFF",
		"#CC0033",
		"#FFFF66",
		"#FFFF99",
		"#FFFFCC",
		"#FF99CC",
		"#6666FF",
		"#666633",
		"#0099CC",
		"#660000",
		"#660033",
		"#006600",
		"#993333",
		"#CCCC99",
		"#FF0000",
		"#FF0066",
		"#FF00CC",
		"#FF3300"
);




var colorcounter = 0;

for (var i = 0; i < a.length; i++) {
	if (links[a[i].href]) {
		color = links[a[i].href];
	} else {
		color = colors[colorcounter];
		links[a[i].href] = color;
		
		colorcounter++;
	}
	
	a[i].style.position = 'relative'; 
	a[i].innerHTML += '<div style="background: '+color+'; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"></div>';
	
}

for (var i = 0; i < c.length; i++) {
	if (links[c[i].href]) {
		color = links[c[i].href];
	} else {
		color = colors[colorcounter];
		links[c[i].href] = color;
		
		colorcounter++;
	}
	
	c[i].style.position = 'relative'; 
	c[i].innerHTML += '<div style="background: '+color+'; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"></div>';
	
}

for (var i = 0; i < b.length; i++) {
	if (b[i].tagName == 'DIV') {
		var d = b[i].getElementsByTagName('a')[0];
	} else {
		var d = b[i];
	}
	
	if (links[d.href]) {
		color = links[d.href];
	} else {
		color = colors[colorcounter];
		links[d.href] = color;
		
		colorcounter++;
	}
	
	d.style.position = 'relative';
	d.innerHTML += '<div style="background: '+color+'; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"></div>';
}