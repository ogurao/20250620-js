let random = Math.random();
console.log(random);

//演習
function rollDice(){
    let dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("result").textContent = "出た目は：" + dice;
}