// alert('Hello From JavaScript!!')

// document.getElementById("message").innerHTML = "This is from JavaScript";

// function greet() {
//     document.getElementById("message").innerHTML = "Happy Tuesday!!"
// }

//  a = 10;
//  b = 20;
//  c = a + b;
// document.getElementById("message").innerHTML = "Addition of "+ a +" and " + b + " is "+ c;

// x = 10;
// let y = 10;
// console.log("Value of x = " + x);
// console.log("Value of y = " + y);
// {
//     x = 20;
//     let y = 20;
//     console.log("Value of x = " + x);
//     console.log("Value of y = " + y);
// }
// console.log("Value of x = " + x);
// console.log("Value of y = " + y);

// function greetuser() {
//     let username = document.getElementById("username").value;
//     document.getElementById("message").innerHTML = "Hello " +username;
// }

// function add() {
//     let num1 = parseInt(document.getElementById("num1").value);
//     let num2 = parseInt(document.getElementById("num2").value);
//     let result = num1+num2;
//     document.getElementById("message").innerHTML = "Addition of "+ num1 +" and " +num2+ " is " + result;
// }

// function subtract() {
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     document.getElementById("message").innerHTML = "Subtraction of "+ num1 +" and " +num2+ " is " + (num1-num2);
// }

// function multiply() {
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     document.getElementById("message").innerHTML = "Multiplication of "+ num1 +" and " +num2+ " is " + (num1*num2);
// }

// function divide() {
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     document.getElementById("message").innerHTML = "Division of "+ num1 +" and " +num2+ " is " + (num1/num2);
//}

// const cars = ['Getz Prime' , 'Honda Amaze' , 'i20' , 'Breeza'];
// document.getElementById("message").innerHTML = cars;

// var date = new Date();
// document.getElementById('fulldate').innerHTML = date;
// switch (date.getDay()) {
//     case 1 :
//          document.getElementById("day").innerHTML = 'Monday';
//          break;
//     case 2 :
//         document.getElementById("day").innerHTML = 'Tuesday';
//         break;
//     case 3 :
//         document.getElementById("day").innerHTML = 'Wednesday';
//         break;
//     case 4 :
//         document.getElementById("day").innerHTML = 'Thursday';
//         break;
//     case 5 :
//         document.getElementById("day").innerHTML = 'Friday';
//         break;
//     case 6 :
//         document.getElementById("day").innerHTML = 'Saturday';
//         break;
//      case 7 :
//         document.getElementById("day").innerHTML = 'Sunday';
//         break;
//     default :
//         break;

// }
// document.getElementById('day').innerHTML = date.getDate();
// switch (date.getMonth() + 1) {
//     case 1:
//         document.getElementById("month").innerHTML = 'January';
//         break;
//     case 2:
//         document.getElementById("month").innerHTML = 'February';
//         break;
//     case 3:
//         document.getElementById("month").innerHTML = 'March';
//         break;
//     case 4:
//         document.getElementById("month").innerHTML = 'April';
//         break;
//     case 5:
//         document.getElementById("month").innerHTML = 'May';
//         break;
//     case 6:
//         document.getElementById("month").innerHTML = 'June';
//         break;
//     case 7:
//         document.getElementById("month").innerHTML = 'July';
//         break;
//     case 8:
//         document.getElementById("month").innerHTML = 'August';
//         break;
//     case 9:
//         document.getElementById("month").innerHTML = 'September';
//         break;
//     case 10:
//         document.getElementById("month").innerHTML = 'October';
//         break;
//     case 11:
//         document.getElementById("month").innerHTML = 'November';
//         break;
//     case 12:
//         document.getElementById("month").innerHTML = 'December';
//         break;
//     default:
//         break;
// }
// document.getElementById('month').innerHTML = date.getMonth() + 1;
// document.getElementById('year').innerHTML = date.getFullYear();
// document.getElementById('hours').innerHTML = date.getHours();
// document.getElementById('minutes').innerHTML = date.getMinutes();
// document.getElementById('seconds').innerHTML = date.getSeconds();

// let text = "";
// for(let i = 0;i<10;i++){
//     text = text + " Number is " + i + "<br>";
// }
// document.getElementById('message').innerHTML = text;

// const cars = ['Getz Prime' , 'Honda Amaze' , 'i20' , 'Breeza'];
// let text = "";
// let length = cars.length;
// for(let i = 0;i<length;i++){
//     text = text + " Car is " + cars[i] + "<br>";
// }
// document.getElementById("message").innerHTML = text;

//For in loop
// const cars = ['Getz Prime' , 'Honda Amaze' , 'i20' , 'Breeza'];
// let text = "";
// for(let i in cars){
//     text = text + " Car is " + cars[i] + "<br>";
// }
// document.getElementById("message").innerHTML = text;

// const cars = ['Getz Prime' , 'Honda Amaze' , 'i20' , 'Breeza'];
// let text = "";
// for(let car of cars){
//     text = text + " Car is " + car + "<br>";
// }
// document.getElementById("message").innerHTML = text;

function validate() {
    alert("validate() is called");
    if(document.userdetails.username.value == ""){
        alert("Please provide user name!");
        document.userdetails.username.focus();
        return false;
    }

    if(document.userdetails.email.value == ""){
        alert("Please provide email-id!");
        document.userdetails.email.focus();
        return false;
    }

    if(document.userdetails.zipcode.value == ""){
        alert("Please provide zipcode!");
        document.userdetails.zipcode.focus();
        return false;
    }
    
    if(document.userdetails.country.value == "-1"){
        alert("Please provide country");
        document.userdetails.country.focus();
        return false;
    }
    return true;
}