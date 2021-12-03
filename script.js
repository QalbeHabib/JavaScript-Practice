// document.write("<h1>hellow world, this is qalbehabib</h1>")

// console.log('hellow world')

// let a = "habib"

// console.log(a + " welcone to the javascript course")


// a = 12

// console.log(a)


// a += 43;
// console.log(a)

// let listofitems  =  ['Apple', 'banana' , 'mango' , 'orenge']

// console.log(listofitems[3])

// let person = {
//     name:'rana qalbehabib',
//     age: 23,
//     height:5.6,
//     weigth:55
// }

// console.log(`my name is ${person.name} and age is ${person.age} and with the height of ${person.height} inches and
// weigth of ${person.weigth}kg`)



// console.log(document.getElementById('habib').innerHTML = "my name is qalbehbib")
// let name = prompt("enter your Name")
// function habib(c ,d ){
//     var result = "the functoin is now a variable"
//     d = c + d

//     console.log(name)

//     console.log(d)
// }

// habib('HEllow ','this is qalbehabib')

// let num = 0;

// while(num < 100)
// {
//     alert
//     num++;
//     console.log(num)
// console.log("while loop is running")
// }


// num = 1;

// while(num < 100)
// {
//     alert
//     num+=1;
//     console.log(num)
// console.log("while loop is running")
// }



//  


// for(i = 0 ; i<=100 ; i++){
//     console.log("for loop running " + i  + " time" )
// }


//Data Type 

let number= 23; // Number Data Type

let name = 'Qalbe HAbib is my name'; // String Data type 

let flot= 45.34; //  Float  data type

let truth = false; // Boolean Data type

let grocery = ['appele' , 'bananaa' , 'orange' , 'mangos'] // Array  data type

let obj = {
    name : 'Qaleb habib',
    age:'23',
    status:"single",
    city: "faisalabad"
} // Object data type

let random; // Undefined data type
let nothing ; // null





//String


let newstrs = ['Qalbehabib', 'ALi' , 'Hassan' , 'Hussain']
let onemorestr = "QalbeAL=li"


//to find the index of the array

console.log(newstrs.indexOf('1'))

//To check the total length of the array
console.log(newstrs.length)

//find the complete word in the array
//slice (start index , end index)//
console.log(newstrs.slice(0,3))
console.log(newstrs.slice(-2))

//Replace 
let strs = "My name is QalbeHabib"
console.log(strs.replace('My','Our'))

// lowercase and lowerCase
console.log(strs.toLowerCase())
console.log(strs.toUpperCase())

//To check the charactor at 
 strs = "My name is QalbeHabib"
console.log(strs.charAt(4))
console.log(strs[3])

//split , it behave in 3 different way, depend on space in the quotation.

console.log(strs.split(""))
console.log(strs.split(" "))
console.log(strs.split("  "))





//Array in JavaScript
// there is 2 way to create array

let fruits = ['banana', 'apple ' , 'mangos' , 'orange']
fruits = new Array('banana', 'apple ' , 'mangos' , 'orange')


console.log(fruits[0]) // this is how to access index of array


//changing index
fruits[0]= 'Pineapple'
console.log(fruits[0])


// array with For loop
console.log("Array using for loop:")
for (let i = 0 ; i<fruits.length ; i++){
    console.log(fruits[i])
}


//converting array to string
console.log('Array To string using .toString() Function'  +'\n' + fruits.toString())
console.log(fruits.join('    -    '))



// removing a array index from aray 

console.log(fruits)// ['Pineapple' , 'apple' , 'mangos', 'orange']
console.log(fruits, fruits.pop())// orange removed
console.log(fruits, fruits.pop())// mango removed
console.log(fruits, fruits.pop())// apple removed
console.log(fruits, fruits.pop())// pineapple removed
console.log(fruits, fruits.pop())// empty fruites


// start from 1:02:44 Shift()










