let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");
icon.addEventListener("click", () => {
  ul.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!ul.contains(e.target) && !icon.contains(e.target)) {
    ul.classList.remove("active");
  }
});
ul.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    ul.classList.remove("active");
  });
});

let btn = document.querySelector("button");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({ top: 0 });
};
