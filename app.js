const menuIcon = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");
const btnText = document.querySelector(".btn-text");
const text = document.querySelector('.btn a');
const sections = document.querySelectorAll('section');


menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
  if (navbar.className.includes("active")) {
    btnText.style.display = "none";
  }else{
    btnText.style.display = `${text.className}`;
  }
};

menuIcon.classList.remove("fa-x");
navbar.classList.remove("active");
