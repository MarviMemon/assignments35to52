 
//============== Q 1 ===================
// let a;
// let b;

// function sum(a,b){
//     document.write(a+b);

// }
// sum(33,22);

//============== Q 2 ==================
// var a;
// a =prompt("enter input year");
// if(a % 4 == 0){
//     document.write("this is a leap year" + a);
// }
// else{
//     document.write("this is not a leap year " + a)
// }


//============== Q 3 ===================
// javascript Program to find the area
// of triangle

// function findArea(a, b, c)
// {
	 
// 	if (a < 0 || b < 0 || c < 0 ||
// 	(a + b <= c) || a + c <= b || b + c <= a)
// 	{
// 		document.write( "Not a valid triangle");
// 		return;
// 	}
// 	let s = (a + b + c) / 2;
// 	return Math.sqrt(s * (s - a) *
// 				(s - b) * (s - c));
// }
// 	let a1 = 3.0;
// 	let b = 4.0;
// 	let c = 5.0;

// document.write( "Area is " + findArea(a1, b, c));

//============== Q 4 ===================
// function getReport() {
//     var name = document.forum.getElementById('name1').value;
//     var eng = document.forum.getElementById('eng').value;
//     var mat = document.forum.getElementById('mathss').value;
//     var phy = document.forum.getElementById('physs').value;

//     var totalmarks = eng + mat + phy;

//     var percentage = (totalmarks / 3) * 100;

//     document.getElementById('resname').innerHTML = name;
//     document.getElementById('getavg').innerHTML = percentage;

// }
//============== Q 5 ===================

// var str = "where are they , where did they go .? ";
// var strpos = str.indexOf("they");
// document.write(strpos);

//============== Q 6 ==================
// Javascript program to remove
// vowels from a String

// function remVowel(str)
// {
// 	let al = [ 'a', 'e', 'i', 'o', 'u',
// 			'A', 'E', 'I', 'O', 'U' ];
// 	let result = "";
	
// 	for(let i = 0; i < str.length; i++)
// 	{
		
// 		if (!al.includes(str[i]))
// 		{
// 			result += str[i];
// 		}
// 	}
// 	return result;
// }
// let str = "i know how to sovle this Q but i don't do this my self";
// document.write("<br>" +str)
// document.write( "<br>" +remVowel(str));


//============== Q 7 ==================
//   function findOccurrences() {
//   var str = "Pleases read this application and give me gratuity";
//   var count = 0;
//   let haveSeenVowel = false;

//   for (const letter of str.toLowerCase()) {
//     switch (letter) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         {
//           if (haveSeenVowel) {
//             count++;
//             haveSeenVowel = false;
//           } else {
//             haveSeenVowel = true;
//           }
//           break;
//         }
//       default:
//         haveSeenVowel = false
//     }
//   }

//   return count
// }

// console.log(findOccurrences());

//============== Q 8 ===================

// let cm, meter, kilometer;
// cm = 1000;
// meter = cm / 100.0;
// kilometer = cm / 100000.0;
// document.write("Length in meter = " + meter + "m" + "</br>");
// document.write("Length in Kilometer = " + kilometer + "km" + "</br>");


//============== Q 9 ===================
 
// function myPay() {
//     var name = prompt("What is your name?");
//     var rate = parseInt(prompt("How much are you payed?"));
//     var hours = parseInt(prompt("How many hours do you work?"));
//     var depend = parseInt(prompt("How many dependents do you claim?"));
     
//     var pay;
//     var tax;
//     if (hours > 40 && rate < 20) {
//         var overtime = rate * 1.5 * (hours - 40); 
//         var regular = rate * 40;
//         pay = overtime + regular;
//     } else {
//         pay = rate * hours;
//     }
// if (depend == 0 && pay > 1000) {
//     tax = .33;
// } else if (depend == 0 && pay <= 1000) {
//     tax = .28;
// } else if (depend >= 1 && depend <= 3 && pay > 1000) {
//     tax = .25;
// } else if (depend >= 1 && depend <= 3 && pay <= 1000) {
//     tax = .22;
// } else if (depend >= 4 && depend <= 6 && pay > 1000) {
//     tax = .22;
// } else if (depend >= 4 && depend <= 6 && pay <= 1000) {
//     tax = .15;
// } else if (depend > 6 && pay > 1000) {
//     tax = .15;
// } else if (depend > 6 && pay <= 1000) {
//     tax = .10;
// }
// var net = pay - (pay * tax);
// document.write("<p> your paycheck </p>" + net);
// }
// myPay();

//============== Q10 ===================
// let input = prompt("enter amount to withdraw");

// while (input.length >= 4 || input.length <= 2 ) {
//     alert("enter amount to withdraw in hundred only ")
//     input = prompt("enter amount to withdraw")
    
// }
// let hundred = input.slice(0, 1);

// let fiftes = input.slice(1,3);
// let coins = input.slice(2,3);
// console.log(coins);
// let tens;
// let a;
// if(fiftes >= 50){
//     a = fift - 50;
//     tens = a,toString();
//     tens = tens.slice(0,1);

//     coins = input.slice(2 , 3)
//     fiftes =1;

// }
// else if(fiftes < 50) {
//     tens = fiftes.slice(0, 1);
//     coins = input.slice(2,3)
//     fiftes = 0;

// }

// document.write("your entered : <b> "+ input + "</b> <br>")
// document.write("your have : <b> "+ hundred + "</b> hundred notes , <b>" + fiftes + "</b> fifty notes ,<b> " + tens + "</b> ten notes and <b> " + coins + "</b> , coins");
 




