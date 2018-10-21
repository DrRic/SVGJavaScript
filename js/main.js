function SVG(elementName) {
	return document.createElementNS('http://www.w3.org/2000/svg', elementName);
}

function init() {
	var elm = document.getElementById("svg01");
	var svg = SVG("svg");
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
	
	group.setAttribute("transform","translate(50,50)");
	group.appendChild(box);
	group.appendChild(circle);
	
	svg.style.height="200px";
	svg.style.width="200px";
	svg.id = "svg-canvas-01";
	svg.classList.add("thin-border");
	svg.appendChild(group)
	elm.appendChild(svg)
}