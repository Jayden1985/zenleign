console.log("code running ..")
var y = confirm("Leave this page ?are you sure ?")
console.log("confirm says",y)

if (y==true){
document.write("<h3>New page loaded <h3><hr>!")
}
if (y==false){
	alert("You chose to stay  !")
}