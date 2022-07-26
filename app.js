function myFunction() 
{
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var output = document.getElementById("output").value;
 //parseInt() fucntion can also be used to convert text to number below
var sum = Number(num1) +  Number(num2);
document.getElementById("output").value = sum;
}
myFunction();
