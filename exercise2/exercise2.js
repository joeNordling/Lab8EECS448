var slide = 1;

function update(){
	var imgTag= document.getElementById("imgId");
	imgTag.src = "file" + slide + ".jpg";
}

function previous(){
	slide--;
	if(slide < 1){
		slide = 5;
	}
	update();
}

function next(){
	slide++;
	if(slide > 5){
		slide = 1;
	}
	update();
}
