let ibg = document.querySelector(".ibg");
let img = ibg.querySelector("img").getAttribute("src");
ibg.setAttribute("style", "background-image:url(" + img + ")");

let body = document.querySelector(".body");
let flag = true;

function onClick(e) {
  if (flag) {
    e.classList.add("active");
  } else {
    e.classList.remove("active");
  }
  flag = !flag;
}
