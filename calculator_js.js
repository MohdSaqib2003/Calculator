var input=document.getElementById("in");
var result;

function left_braces(){
  input.value=input.value+'(';
}

function right_braces(){
  input.value=input.value+')';
}

function back(){
 var str =  input.value;
 input.value = str.substr(0,str.length-1);
}




function b1(){
  input.value=input.value+Number("1");
}
//  var b11=document.getElementById("b1");
//  b11.addEventListener("click",b1)

function b2(){
  input.value=input.value+Number("2");
}
//  var b22=document.getElementById("b2");
//  b22.addEventListener("click",b2)


function b3(){
  input.value=input.value+Number("3");
}
//  var b33=document.getElementById("b3");
//  b33.addEventListener("click",b3)


function b4(){
  input.value=input.value+Number("4");
}
//  var b44=document.getElementById("b4");
//  b44.addEventListener("click",b4)


function b5(){
  input.value=input.value+Number("5");
}
//  var b55=document.getElementById("b5");
//  b55.addEventListener("click",b5)


function b6(){
  input.value=input.value+Number("6");
}
//  var b66=document.getElementById("b6");
//  b66.addEventListener("click",b6)


function b7(){
  input.value=input.value+Number("7");
}
//  var b77=document.getElementById("b7");
//  b77.addEventListener("click",b7)


function b8(){
  input.value=input.value+Number("8");
}
//  var b88=document.getElementById("b8");
//  b88.addEventListener("click",b8)


function b9(){
  input.value=input.value+Number("9");
}
//  var b99=document.getElementById("b9");
//  b99.addEventListener("click",b9)


function b0(){
  input.value=input.value+Number("0");
}
//  var b00=document.getElementById("b0");
//  b00.addEventListener("click",b0)


function c(){
  input.value="";
}
//  var cc=document.getElementById("c");
//  cc.addEventListener("click",c)


function div(){
  input.value=input.value+"/";
  
}
// var di=document.getElementById("div");
//  di.addEventListener("click",div)


function mul(){
  input.value=input.value+"*";
}
// var ml=document.getElementById("mul");
//  ml.addEventListener("click",mul)


function plus(){
  input.value=input.value+"+";
}
// var pl=document.getElementById("plus");
//  pl.addEventListener("click",plus)


function minus(){
  input.value=input.value+"-";
}
// var mins=document.getElementById("minus");
//  mins.addEventListener("click",minus)

 
function dot(){
   input.value=input.value+".";
}
// var dt=document.getElementById("dot");
//   dt.addEventListener("click",dot)


function equal(){
  input.value = Number(eval(input.value));
}
