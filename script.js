var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var divbg = document.getElementById("gradient");

var style = getComputedStyle(document.documentElement);
// What the hell is going on up there?
var rbg = style.getPropertyValue("--right-bg-color");
var lbg = style.getPropertyValue("--left-bg-color");
var data_for_setInitialInputValue = [
	[color1, rbg],
	[color2, lbg],
]


function setInitialInputValue(element, bgcolor) { 
	element.setAttribute("value", bgcolor);

}

function setGradient() {
	divbg.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = divbg.style.background + ";";
}

data_for_setInitialInputValue.forEach(function(a) {
	setInitialInputValue.apply(null, a)
});

setGradient();


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);