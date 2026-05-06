//1. toString()
// number ko string me convert karta hai
let num1 = 123;
console.log(num1.toString()); // "123"


//2. toFixed()
// decimal ke baad fixed digits deta hai
let num2 = 12.3456;
console.log(num2.toFixed(2)); // "12.35"


//3. toPrecision()
// total digits control karta hai
let num3 = 12.3456;
console.log(num3.toPrecision(3)); // "12.3"


//  4. valueOf()
// number ki original value return karta hai
let num4 = 100;
console.log(num4.valueOf()); // 100


// 5. Number()
// value ko number me convert karta hai
let num5 = "50";
console.log(Number(num5)); // 50


// 6. parseInt()
// string se integer nikalta hai
let num6 = "45.67";
console.log(parseInt(num6)); // 45


//7. parseFloat()
// string se decimal number nikalta hai
let num7 = "45.67";
console.log(parseFloat(num7)); // 45.67


//8. isNaN()
// check karta hai value number hai ya nahi
let num8 = "abc";
console.log(isNaN(num8)); // true


//9. isFinite()
// check karta hai number finite hai ya nahi
let num9 = 100;
console.log(isFinite(num9)); // true


//10. toLocaleString()
// number ko readable format me dikhata hai
let num10 = 1000000;
console.log(num10.toLocaleString()); // "1,000,000"