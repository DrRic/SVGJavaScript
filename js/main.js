var glyphs=[]

function SVG(elementName) {
	return document.createElementNS('http://www.w3.org/2000/svg', elementName);
}

function randomInt(min, max) {
    return Math.random() * (max - min) + min;
}

function initAdd() {
	var elm = document.getElementById("svg02");
	var svg = SVG("svg");
	svg.style.height="200px";
	svg.style.width="200px";
	svg.id = "svg-canvas-02";
	svg.classList.add("thin-border");
	elm.appendChild(svg)
}

function initGroup() {
	var elm = document.getElementById("svg01");
	var svg = SVG("svg");

	
	svg.style.height="200px";
	svg.style.width="200px";
	svg.id = "svg-canvas-01";
	svg.classList.add("thin-border");
	
	var group = glyph()
	group.setAttribute("transform","translate(50,50)");
	svg.appendChild(group)
	elm.appendChild(svg)
}

function init() {
	initGroup();
	initAdd();
}


function glyph() {
	var circle = SVG("circle");
	var box = SVG("rect")
	var group = SVG("g");
	
	box.setAttribute("x",0)	
	box.setAttribute("y",0)	
	box.setAttribute("height",100)	
	box.setAttribute("width",100)
	box.setAttribute("fill","rgb(200,200,200)")	
		
		
	circle.setAttribute("r",45);
	circle.setAttribute("cx",50);
	circle.setAttribute("cy",50);
	circle.setAttribute("fill","rgb(100,100,100)");
	
	
	group.appendChild(box);
	group.appendChild(circle);
	
	return group;
}

function newGlyph() {
	svg = document.getElementById("svg-canvas-02");
	var group = glyph();
	group.setAttribute("transform","translate("+randomInt(0,100)+","+randomInt(0,100)+")");
	svg.appendChild(group);
	glyphs.push(group);
}

function removeGlyph() {
	if(glyphs.length>0){
		var glyph = glyphs.pop()
		glyph.remove();
	}
}


