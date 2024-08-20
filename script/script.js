let popUp = document.getElementById("popup");
let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
openBtn.onclick = function () {
  popUp.classList.add("open-popup");
};
closeBtn.onclick = function () {
  popUp.classList.remove("open-popup");
};
