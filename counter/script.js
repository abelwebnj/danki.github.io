console.log("Hello World!!!")

//getting elements by classname
const title = document.getElementsByClassName("heading");
console.log(title);
const header = document.getElementsByClassName("heading1");
console.log(header);

//getting elements  by id
const title0 = document.getElementById("heading2");
console.log(title0);
const title1 = document.getElementById("counter");
console.log(title1);
const title3 = document.getElementById("container");
console.log(title3);

//getting elements by queryselector
const title4 = document.querySelector("h1");
console.log(title4);
const title5 = document.querySelector("#container");
console.log(title5);

let count = 0;
console.log(document.getElementById("counter"));
let add = document.getElementById("incre");
let sub = document.getElementById("decre");
let res = document.getElementById("reset");
let h1 = document.getElementById("counter");
add.addEventListener("click", () => {
  count++;
  console.log(count);
  h1.innerHTML = count;
});

sub.addEventListener("click", () => {
  count--;
  console.log(count);
  h1.innerHTML = count;
});

res.addEventListener("click", () => {
  count = 0;
  console.log(count);
  h1.innerHTML = count;
});