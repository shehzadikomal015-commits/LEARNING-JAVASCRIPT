// ===============================
// JavaScript String Methods Demo
// ===============================

// 1. toUpperCase()
let name = "komal";
console.log("toUpperCase:", name.toUpperCase());

// 2. toLowerCase()
let text = "HELLO WORLD";
console.log("toLowerCase:", text.toLowerCase());

// 3. trim()
let msg = "   hello   ";
console.log("trim:", msg.trim());

// 4. slice()
let str1 = "JavaScript";
console.log("slice:", str1.slice(0, 4)); // Java

// 5. substring()
let str2 = "Programming";
console.log("substring:", str2.substring(0, 6)); // Progra

// 6. replace()
let sentence = "I like cats";
console.log("replace:", sentence.replace("cats", "dogs"));

// 7. includes()
let line = "I love JavaScript";
console.log("includes:", line.includes("love")); // true

// 8. indexOf()
let word = "hello";
console.log("indexOf:", word.indexOf("l")); // 2

// 9. split()
let data = "apple,banana,mango";
console.log("split:", data.split(","));

// 10. concat()
let firstName = "Komal";
let lastName = "Khan";
let fullName = firstName + " " + lastName; // Using + operator
console.log("concat with +:", fullName);
let fullName2 = firstName.concat(" ", lastName); // Using concat() method
console.log("concat with concat():", fullName2);