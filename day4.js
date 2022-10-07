//write a while loop to count down to 0, starting anywhere between 5 & 10

// var i = 7 //initialize our variable
// while (i >= 0){ // as long as i is greater than 0, this while loop will run
//     console.log(i) //printting i to the console
//     i -= 1 //decrementing i by 1
// }

// var i = 0 //make it count by mulitples of 3 up to 35
// while(i <=35){
//     console.log(i)
//     i += 3
// }

// var i = 0 //make it count by 5s up to 100
// while(i <=100){
//     console.log(i)
//     i += 5
// }
//Using a while loop print integers between 0 and 20. All numbers divisible by 2 should be multiplied by 3 before they are output. All other integers should not be output.
// var i = 0 //set variable
// while (i <= 20){ //while i is less than or equal to 20 run the loop
//     if(i % 2 == 0){ //if i is even
//     console.log(i * 3) //print i * 3 
//     } //end if/else statement
//     i++ //add one to i
// } 

// let additionTwo = (x,y) => x + y
// console.log(additionTwo(10,5))

// let additonThree = (x,y) =>{
//     return x + y
// }
// console.log(additionThree(7,4))

//write a function that adds 3 numbers in ES5

// function addThree(x,y,z){
//     return x + y + z
// }
// console.log(addThree(2,3,4))

//write a function that adds three numbers and divides the result by 3

// function meanThree(x,y,z){
//     return (x + y + z) / 3
// }
// console.log(meanThree(3,5,7))

//scope: global scope, local scope, block scope. GLOBAL: can be declared any time and outside of a function. example is i in several of our exercises. LOCAL: only accessed inside function

// function vari(){
//     let x = 1
//     if (true){
//         let x = 2
//         console.log(x)
//     }
//     console.log(x)
// }

//keep trying to get fizzbuzz//
const fb = [];
// ADD CODE HERE
let i=1
    while(i <= 16){
        if(i % 3 === 0 && i % 5 === 0){
            fb.push('fizzbuzz');
        } else {
            if(i % 3 === 0){
                fb.push('buzz');
            } else {
                if(i % 5 === 0){
                    fb.push('fizz');
                } else {
                    fb.push(i);
                }
            }
        } 
    } i++
    
// let i=1
// while(i <= 16){
//   if(i % 3 === 0 && i % 5 === 0){
//     fb.push("fizzbuzz");
//   }else{
//     if(i % 3 === 0){
//       fb.push("buzz");
//     }else{
//       if(i % 5 === 0){
//         fb.push("fizz");
//       }else{
//         fb.push(i);
//       }
// i++
// console.log(fb)
//     }
