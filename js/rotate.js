console.log("..running")

function ctxm(){
console.log(".....Fetching 5s")	
}

window.setTimeout(ctxm,5000);

function blueBrdr(){
	var w=document.getElementById("wheel")
	//console.log(w.style)
	w.style.borderColor="blue"
}

function redBrdr(){
	var w=document.getElementById("wheel")
	//console.log(w.style)
	w.style.borderColor="red"
}
function purpleBrdr(){
	var w=document.getElementById("wheel")
	//console.log(w.style)
	w.style.borderColor="purple"
}

function chg(){
	console.log("..flywheel")
window.setInterval(blueBrdr,2000);
window.setInterval(redBrdr,4000);
window.setInterval(purpleBrdr,6000);}

window.setInterval(blueBrdr,13000);

chg()


function red2Brdr(){
	var w=document.getElementById("box")
	//console.log(w.style)
	w.style.borderColorTop="red"
	
}
red2Brdr()

















