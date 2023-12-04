// nn bb ss u - Primitives in Js
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Akash"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)

// Non Primitive Data Type - Objects in Js
const item = {
  "Akash": true,
  "Aditya": false,
  "Parima": 67,
  "Rohan": undefined
}
console.log(item["Akash"])

///////////////////////////////////////////////////////

// Chapter 1 - Q1
let a1 = "Harry"
let b1= 6
console.log(a1 + b1)

// Chapter 1 - Q2
console.log(typeof (a1+b1))

// Chapter 1 - Q3
const a2 = {
  name: "Harry",
  section: 1,
  isPrincipal: false
}
 //a2 = 45
// a1 = {}
console.log(a2);

// Chapter 1 - Q4
a2['friend'] = "Shubham"  
a2['name'] = "Lovish"  
console.log(a2)

// Chapter 1 - Q5
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}

console.log(dict['yakka'])