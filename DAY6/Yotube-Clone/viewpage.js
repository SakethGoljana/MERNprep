const searchquerystr = window.location.search;
console.log(searchquerystr);
const res = searchquerystr.split("=");
console.log(res);
const videoid = res[1];
const iframe = document.getElementsByTagName("iframe")[0];
iframe.setAttribute("src", `https://www.youtube.com/embed/` + videoid);
