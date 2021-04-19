function update(){
	var textTag = document.querySelector("body > div:nth-child(1) > div");
	textTag.style.backgroundColor = 'rgb('+document.getElementById("rBackground").value+','+document.getElementById("gBackground").value+','+document.getElementById("bBackground").value+")";
	textTag.style.borderColor = 'rgb('+document.getElementById("rBorder").value+','+document.getElementById("gBorder").value+','+document.getElementById("bBorder").value+")";
	textTag.style.borderWidth = document.getElementById("wBorder").value+"px "+document.getElementById("wBorder").value+"px "+document.getElementById("wBorder").value+"px "+document.getElementById("wBorder").value+"px ";
	textTag.style.borderStyle = "solid";
}