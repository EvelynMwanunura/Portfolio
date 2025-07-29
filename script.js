function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let todaysDate = new Date();
const currentYear = todaysDate.getFullYear();
console.log(currentYear);

const footer = document.getElementById("footer");
footer.innerHTML = `Copyright &#169; ${currentYear} Evelyn Nomsa Mwanunura. All Rights Reserved.`;
