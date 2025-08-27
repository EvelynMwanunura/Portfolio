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

  element.textContent = "";
  type();
}

typeWriter("HI, I'M EVELYN NOMSA MWANUNURA", "typewriter", 100);

class Project {
  constructor(title, image, description, liveLink, githubLink) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.liveLink = liveLink;
    this.githubLink = githubLink;
  }

  // Render HTML for each project
  render() {
    return `
        <div class="project-card">
          <img src="${this.image}" alt="${this.title} Screenshot" />
          <h3>${this.title}</h3>
          <p>${this.description}</p>
          <div class="project-links">
            ${
              this.liveLink
                ? `<a href="${this.liveLink}" target="_blank" class="btn btn-primary">Live Demo</a>`
                : ""
            }
            ${
              this.githubLink
                ? `<a href="${this.githubLink}" target="_blank" class="btn btn-secondary">GitHub</a>`
                : ""
            }
          </div>
        </div>
      `;
  }
}

// Create project objects
const projects = [
  new Project(
    "Realtor's Landing Page (In Progress)",
    "./assets/realtorsLandingPage.png",
    "Landing page for a real estate company showcasing properties with intuitive navigation.",
    "https://propertypractitioner.netlify.app/",
    "https://github.com/EvelynMwanunura/Realtor"
  ),
  new Project(
    "TV Project",
    "./assets/tvMazeProject.png",
    "Web app using TV Maze API to browse TV shows, view details, and search in real time.",
    "https://cyf-evelynmwanunura-tv-project.netlify.app/",
    "https://github.com/EvelynMwanunura/Project-TV-Show"
  ),
  new Project(
    "Commemorative Days Calendar",
    "./assets/calendarProject.png",
    "Interactive calendar from JSON data with .ics export functionality.",
    "https://days-calendar-project-cyf.netlify.app/",
    "https://github.com/EvelynMwanunura/The-Piscine/tree/main/Project-Days-Calendar"
  ),
  new Project(
    "Codewars Leaderboard",
    "./assets/codewars.png",
    "App that fetches multiple Codewars users’ stats and displays a real-time leaderboard.",
    "https://codewarsleaderboard.netlify.app/",
    "https://github.com/EvelynMwanunura/The-Piscine-Practice/tree/main/Project-Codewars-Leaderboard"
  ),
  new Project(
    "Spaced Repetition Tracker",
    "./assets/spcedRepetition.png",
    "Collaborative study tool that calculates spaced repetition dates and stores data in local storage.",
    "https://spaced-repetition-tracker-teamproject.netlify.app/",
    "https://github.com/EvelynMwanunura/The-Piscine/tree/main/Project-Spaced-Repetition-Tracker"
  ),
  new Project(
    "Weather App",
    "./assets/weatherApp.png",
    "Responsive weather app that displays current weather, 5-day forecast, and more.",
    "https://weatherappeve.netlify.app/",
    "https://github.com/EvelynMwanunura/WeatherApp"
  ),
  new Project(
    "My Portfolio",
    "./assets/portfolio.png",
    "Personal portfolio website showcasing my journey, skills, certifications, and projects.",
    "https://mwanunura.netlify.app/",
    "https://github.com/EvelynMwanunura/Portfolio"
  ),
];

const projectGrid = document.getElementById("projectGrid");
projectGrid.innerHTML = projects.map((project) => project.render()).join("");
