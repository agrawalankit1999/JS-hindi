//**********Primitive*****************************************

// Primitive datatypes is work on call by value which means that we didn't get the reference of the original data instead we get the copy of the data. So, whenever we do the changes in data then it is done in the copy of the data.

//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


//*****************Reference(Non-Primitive)*******************

//It works on call by Reference and we can allocate the reference to memory.

//Array, Objects, Fuction

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//*******************Notes************************************

// Javascript is Dynamically Typed Language which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.


// Type of val	Result
// Undefined	"undefined"
// Null	        "object"
// Boolean	    "boolean"
// Number	    "number"
// String	    "string"
// Object (native and does not implement [[Call]])	"object"
// Object (native or host and does implement [[Call]])	"function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object