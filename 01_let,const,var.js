//console.log("Hello World");

function a(a,b,c){
    return (a+b)/c;
}
let h= a(10, 20, 30)
//console.log(h);

///////////////////////////////////////////////////

var a=45;
var b="Akash";
var c= null
var c = 10;
var d=undefined //-------> var used in old java script. Var can be re declared 

let e=20;
let f = "Akash";
{
    let f = 1; //--------> let can be redeclared in another scope(block) and re initialised.
    console.log(f);
}
console.log(f);

const g ="Agrawal";
//g=10;  ------------> const can not be reassigned.
console.log(g);

