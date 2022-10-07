////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////

//1. Write a JavaScript display the larger of two integers

// //
var x = 4
var y = 5
if(x > y){
  console.log(x);
  } else {
    console.log(y)
  }

/* 2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */

let grade = 98
if(grade <= 55){
  console.log("You Fail");
} else if(grade < 70){
  console.log("You got a D");
} else if(grade <  80){
  console.log("You got a C");
} else if(grade < 90){
  console.log("You got a B");
} else {
  console.log("You got an A!")
}

//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"
let time = 1000
if(time >= 500 && time < 1200){
  console.log("Good Morning");
} else if(time >= 1200 && time <= 1600){
  console.log("Good Afternoon");
} else{
  console.log("Hey there");
}

////////////////////////////////////////////////////////////////
// Strings:
///////////////////////////////////////////////////////////////
// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina

let item = "Sabrina"
console.log(item.charAt(4));

// // Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
//Unicode is a way of equalizing all written languages into the same set of characters so that computers can accurately display world languages.

let char = "Teddy"
console.log(char.charCodeAt(3));
console.log(String.fromCharCode(100));

// Using fromCharCode() - make it readable for us :). You'll see!

// // Take your first and last name and concat()

console.log('Jessica ', 'Frances ', 'OBrien')

// // Create a string and make it return true using startsWith()

const strl = 'Weekend To-Do List'
console.log(strl.startsWith('Week'));
console.log(strl.endsWith('sleep'));

// // Now use any variable with endsWith() and return false

// // // Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, and the Moon looked down at Ozgur.'
console.log(ozgur.includes('time'));

// // // Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

console.log(joshHadALittleLambOopsCow.indexOf('cow'));

// ////////////////////////////////////////////////////////////////
// // Boolean:
// ///////////////////////////////////////////////////////////////

// // I just want my dreams to come true. 
// // With the powers of logical and comparison operators, PRINT TRUE please!
// // Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b)
console.log(c > b)
console.log(d === d)
console.log(d !== a)
console.log(a < 15)
console.log(a < b < c)
console.log(c > b > a !== d)


////////////////////////////////////////////////////////////////
// Loops:
///////////////////////////////////////////////////////////////
// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.

for(k = 1; k <= 10; k++){
  console.log('Ken ' + k + 'spin')
}
console.log("Stop the room, I'd like to get off");

let t = 0
while(t < 20){
  console.log("I'm sorry")
  t++
}


// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
    thing1: 'shoes',
    thing2: 'clothes',
    thing3: 'gaming console'
  }
  for (const property in whateverQueenBeySaid) {
    console.log(`${property}: ${whateverQueenBeySaid[property]}`);
  }
  
  // Using (FOR IN LOOP), print the indexes of the array.
  const lana = ['l', 'a', 'n', 'a']

  for (const property in lana) {
    console.log(`${lana[property]}`)
  }
  
  // USE (FOR OF LOOP)!
  const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
  for (const element of tia) {
    console.log(element);
  }
  
  // Look into forEach() loop, it accepts a callback aka a function inside a function. 
  // Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
  const perscholas = ['Amira', 'Arely', 'Jonathan']
  let j = 'PS'
  perscholas.forEach(function(j) {
    console.log(j + ' PS')
  })

////////////////////////////////////////////////////////////////
// Arrays:
///////////////////////////////////////////////////////////////

// Look up the following: Make a note of what each one of these methods do
// push() //adds a new element to end of an array //no argument!
// pop() //removes the last element from array //no argument!
// unshift() //adds a new first element to an array //no argument!
// shift() //removes the first element from an array //no argument!!
// concat() // concatenates the elements in an array
// splice() //adds or removes any number of elements to or from an array
// slice() //copies all or part of any array
// sort() //sorts elements of an array according to argument
// includes() //returns true or false if the array contains a certain argument
// indexOf() //returns the index position of an argument
// length //returns the length in characters of the argument

/* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
var shoppingList = [

  "cool ranch doritos",

  "kings hawaiian sweet bread",

  "peanut butter oreos",

  "fruit loops cereal"

];
shoppingList.push('Hendricks gin')
console.log(shoppingList)

//3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
const reversed = yoda.reverse()
console.log(yoda)


//4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
let nowServing = 0
waitList.forEach(function(nowServing){
  console.log(waitList)
})
//5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

var shoe = ["just", "do", "it"];
 

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.

//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise

//4. Write a function charCount that takes a string and returns the length of the string.

//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.

