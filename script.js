function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Set current year in footer
let todaysDate = new Date();
const currentYear = todaysDate.getFullYear();

const footer = document.getElementById("footer");
footer.innerHTML = `Copyright &#169; ${currentYear} Evelyn Nomsa Mwanunura. All Rights Reserved.`;

// Typewriter Effect Function
function typeWriter(text, elementID, speed = 100) {
  const element = document.getElementById(elementID);
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  element.textContent = ""; // Clear previous content if any
  type();
}

// Call the function
typeWriter("HI, I'M EVELYN NOMSA MWANUNURA", "typewriter", 100);
