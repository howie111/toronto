function init(){
var h1tags = document.getElementById("change");
h1tags.onclick = changeColor;

}

function changeColor() {
	// body...

	this.innerHTML = "Click Again";
	var color = "#bbb7c9";
	this.style.color = color;
}
 
 