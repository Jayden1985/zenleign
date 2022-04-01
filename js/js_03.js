console.log(".....running js 03 ")
var w_1234 = "some text "

//var n = alert ("some message")
//console.log("alert returned: ",n)

//Javascipt Confirm box
/*
var m  = confirm("Proceed to upload ?")

console.log("Confirm box returned: ",m)
if (m==true){
var info = document.getElementById("info")
info.innerHTML = "upload was successfull"
}
if (m==false){
var info = document.getElementById("info")
info.innerHTML = "upload was canceled"
}
*/


result = prompt("Enter your data", ['default']); 

console.log("prompt returned: ",result)

if (result!=null){
var info = document.getElementById("data")
info.innerHTML = "Entry made is : "+ result
}
if (result==null){
var info = document.getElementById("data")
info.innerHTML = "Entry was cancelled"
}













