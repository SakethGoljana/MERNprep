console.log(window);
console.log(window.document);
console.dir(window.document);
const headings = document.getElementsByTagName("h2");
console.log("headings : ", headings);

const header = document.getElementsByTagName("header");
console.log("header : ", header);

headings[0].innerText = "Hello, World!";
headings[1].innerText = "Welcome to the DOM Manipulation Example";

const classn = document.getElementsByClassName("class1");
console.log("classn : ", classn);

const firstHeading = document.querySelector("h2");
console.log("firstHeading : ", firstHeading);

const title = document.createElement("h1");
title.innerText = "This is from DOM";
title.style.color = "grey";
const parent = document.getElementById("root");
parent.prepend(title);

const title2 = document.createElement("h1");
title2.innerText = "This is from DOM2";
title2.style.color = "red";
const parent2 = document.getElementById("root");
parent2.prepend(title2);
