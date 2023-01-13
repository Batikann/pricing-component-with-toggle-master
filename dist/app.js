const title = document.getElementById("title");
const title_2 = document.getElementById("title-2");
let checkbox = document.querySelector("#toggle");
const price_p = document.querySelectorAll(".price-p");
const price_p_2 = document.querySelectorAll(".price-p-2");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    price_p.forEach(p=>p.style.display="none");
    price_p_2.forEach(p=>p.style.display="flex");
    title.style.color="hsl(234, 14%, 74%)";
    title_2.style.color="hsl(232, 13%, 33%)";
  }
  else{
    price_p.forEach(p=>p.style.display="flex");
    price_p_2.forEach(p=>p.style.display="none");
    title.style.color="hsl(232, 13%, 33%)";
    title_2.style.color="hsl(234, 14%, 74%)";
  }

});



