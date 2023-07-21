
//============Q1===========
// var now = new Date();
// document.write(now);

//==============Q2==============
// function welcomeTheUsar() {
//     let firstName = document.getElementById("first-name").value;
//     let lastName = document.getElementById("last-name").value;
//     let full = firstName +" "+ lastName;
//     // document.write(full);
//     alert(full);
//   }

//==============Q3=============
// function add(){
//   var numOne, numTwo, sum;
//   numOne = parseInt(document.getElementById("first").value);
//   numTwo = parseInt(document.getElementById("second").value);
//   sum = numOne + numTwo;
//   document.getElementById("answer").value = sum;
// }

// //===========Q4===========
// function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy(){ 
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 / num2;
// }
//==========Q5====================
// let variable = 5 ;
// let squaredNumber2 = Math.pow(variable,2);
// document.write("5*5 = ",squaredNumber2);
// document.write("<br> "+" <br>")

//Q6===============================
// function func() { 
//     function fact(num) {     
//        if (num < 0){ 
//           return -1; 
//        } 
//        else if(num == 0){ 
//           return 1; 
//        } 
//        else { 
//           let result = 1; 
//           for(var i = num; i > 1; i--){ 
//              result *= i; 
//           }; 
//           return result; 
//        } 
//     }; 
//     const num = 4; 
//     document.getElementById("para").innerHTML = fact(num); 
//  }; 

 //=======Q7==================
//  function sum(){
//     var FirstNumber = 1;
//     var SecondNumber = document.getElementById('txtSecondNumber').value;
//     alert(parseInt(FirstNumber) + parseInt(SecondNumber));
// }

//===========Q8=========
// document.write("<br>")
// function pythagorean(sideA, sideB){
//   return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }
// // console.log(pythagorean(4, 3));
//  document.write(pythagorean(4, 3));
//  document.write("<br>")


//===========Q9========
// document.write("<br>")
// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectangle.");
//    function area(length, width) {
//       return length * width;
// }
//    function perimeter(length, width) {
//       return 2*( length + width);
// }
        
// document.writeln('The area of your rectangle is ' + area(length, width));         
// document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));

   
//============Q10=================
// function check_palindrome(str) {
//    let j = str.length - 1;
//    for (let i = 0; i < j / 2; i++) {
//        let x = str[i]; 
//        let y = str[j - i]; 
//        if (x != y) {
           
//            return false;
//        }
//    }
   
//    return true;

// }
// function is_palindrome(str) {
//    let ans = check_palindrome(str);
//    if (ans == true) {
//        document.write("passed string is palindrome ");
//    }
//    else {
//        document.write("passed string not a palindrome");
//    }
// }
// let test = "racecar";
// is_palindrome(test)


//=======================Q11===================

// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 
//  }
//  document.write(titleCase("the quick brown fox"));
//  document.write("<br>")
//===================12===================

// function find_longest_word(str){
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

//================13=============
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

//document.write(char_count('w3resource.com', 'o'));


//=============Q14=================
function calcCircumfrence(radius) {
  var y = (Math.PI * radius) * 2;
document.write("The circumfrence is " + y + ".");
}
function calcArea(radius) {
  var x = (Math.PI * radius) * radius;
document.write("The area is " + x + ".");
}

calcCircumfrence(30);
calcArea(10);
