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
