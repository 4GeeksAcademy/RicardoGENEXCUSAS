import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  

  let who = ['THE ALIENS', 'The bird', 'A Baby', 'Just a normal guy', 'Camarom from the island'];
  let action = ['Eat', 'Respect', 'Understood', 'Shooted', 'Barked'];
  let what = ['My code', 'the food', 'The Book', 'The 1965 documents', 'the wall'];
  let when = ['When you were watching', 'In the summer time', 'Last days of november', 'out of the time', 'today'];
  
  function getRandomNumber(a,b) {
    return Math.floor(Math.random() * (b - a) + a)
  }

  function getRandom(anyArray) {
    let max = anyArray.length;
    let min = 0;
    let random = getRandomNumber(min, max);
    return anyArray[random];
  }
  document.getElementById("AAAAA").innerHTML = getRandom(who)+ " " + getRandom(action) + " " + getRandom(what) + " " + getRandom(when);
}
