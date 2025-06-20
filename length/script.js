///// lengthプロパティ

// 配列

let fruits = ["apple","banana","orange"];
console.log(fruits.length);

//文字列

let message = "Hello";
console.log(message.length);


//演習
let textarea = document.getElementById("inputText");
let countDisplay = document.getElementById("count");

textarea = document.getElementById("count");

textarea/addEventListener("input",() =>{
    let length = textarea.value.length;
    countDisplay.textCountent = "文字数：" + length;
})