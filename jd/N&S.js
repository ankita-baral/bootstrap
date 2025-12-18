// at a resturent you ate :1 Dal rs 100, 2 Roti rs 20, 1 Rice rs 80 , 1 Sabji rs 150 , 1 Papad rs 10 , 1 Salad rs 30 , 1 Sweet rs 50 , calsulate and display the final bill amount //


let dal = 100;
let roti = 20;
let rice = 80;  
let sabji = 150;
let papad = 10;
let salad = 30;
let sweet = 50;

let totalBill = dal + (roti * 2) + rice + sabji + papad + salad + sweet;

console.log("Final Bill Amount: Rs " + totalBill);

// Output: Final Bill Amount: Rs 440//

//calculate 18% GST on the final bill amount and display it //

let gstRate = 0.18;
let gstAmount = totalBill * gstRate;
let finalAmountWithGST = totalBill + gstAmount;
console.log("GST Amount (18%): Rs " + gstAmount.toFixed(2));
console.log("Final Amount with GST: Rs " + finalAmountWithGST.toFixed(2));  
// Output: GST Amount (18%): Rs 79.20//
// Output: Final Amount with GST: Rs 519.20 //

//creat string using all 3 methods//

let name = "John";
let age = 25;
let city = "New York";
// Using concatenation//
let concatenatedString = "Name: " + name + ", Age: " + age + ", City: " + city;
console.log(concatenatedString);
// Output: Name: John, Age: 25, City: New York//   
// Using template literals//
let templateLiteralString = `Name: ${name}, Age: ${age}, City: ${city}`;
console.log(templateLiteralString); 
// Output: Name: John, Age: 25, City: New York//


