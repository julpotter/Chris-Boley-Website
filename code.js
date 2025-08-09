
var count = 0;
if (document.documentElement.clientWidth <= 600){
    carousel("cside-slides", 0);
    carousel("springmtn-slides", 0);
    carousel("shasta-slides", 0);
    carousel("arbors-slides-before", 0);
    carousel("arbors-slides-after", 0);
}
else {
    document.getElementsByClassName("slide").style.display = "block";
}


function carousel(strng, slide_index){
    count++;
    // console.log("Ran the carousel " + count + " times");
    var i;
    var x = document.getElementsByClassName(strng);
    if (x.length === 0){
	console.error("Error: No elements found with the class name '" + strng + "'.");
    }
    for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";
    }
    slide_index++;
    if (slide_index > x.length) {slide_index = 1}
    x[slide_index - 1].style.display = "block";
    setTimeout(() => carousel(strng, slide_index), 9000);
}
    
