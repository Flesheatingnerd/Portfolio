document.addEventListener("DOMContentLoaded", function() {
  const lines = [
    "ACCESS GRANTED // PERSONAL DATABASE ONLINE",
    "Clearance Level: PUBLIC",
    "Loading portfolio modules...",
    "Initializing user interface [OK]",
    "Verifying system integrity [OK]",
    "Decrypting memory sectors...",
    "Loading user profile: Frank Eliel Gasta",
    "Establishing secure link...",
    "Connection stable. System ready for exploration.",
    "",
    '<ul>' +
      '<li><a href="#aboutMe.html">Access File: ABOUT_ME.sys</a></li>' +
      '<li><a href="#project.html">Access File: PROJECTS_DATABASE.sys</a></li>' +
      '<li><a href="#experience.html">Access File: EXPERIENCE_ARCHIVE.SYS</a></li>' +
      '<li><a href="#contact.html">Access File: CONTACT_PROTOCOL.sys</a></li>' +
    '</ul>'
  ];

  const container = document.getElementById("boot-sequence");

  let index = 0;
  function typeLine() {
    if (index < lines.length) {
      const line = document.createElement("p");
      line.innerHTML = lines[index];
      container.appendChild(line);
      index++;
      setTimeout(typeLine, 1000); // adjust speed here (ms)
    } else {
      // Once all lines are typed, now links exist — attach click events!
      setupSectionLinks();
    }
  }

  typeLine();

  // Add this new function inside the same script
  function setupSectionLinks() {
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    menuLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetID = link.getAttribute("href").replace(".html", "").replace("#", "");
        const targetSection = document.getElementById(targetID);

        // Hide all sections
        sections.forEach(sec => sec.classList.remove("active"));

        // Show the target section
        if (targetSection) {
          targetSection.classList.add("active");

          // Optional fade/typing effect
          const textEls = targetSection.querySelectorAll("p, li");
          let i = 0;
          textEls.forEach(el => (el.style.opacity = 0));
          function showLine() {
            if (i < textEls.length) {
              textEls[i].style.transition = "opacity 0.3s";
              textEls[i].style.opacity = 1;
              i++;
              setTimeout(showLine, 100);
            }
          }
          showLine();
        }
      });
    });
  }
});

// Simple "reveal" animation for PROJECTS (non-blocking)
  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("#projects-list li");
    items.forEach((li, i) => {
      li.style.opacity = 0;
      li.style.transform = "translateY(6px)";
      setTimeout(() => {
        li.style.transition = "opacity 400ms ease, transform 400ms ease";
        li.style.opacity = 1;
        li.style.transform = "translateY(0)";
      }, 600 + i * 220); // staggered reveal
    });
  });

// Simple "reveal" animation for EXPERIENCE (non-blocking)
  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("#exp-list li");
    items.forEach((li, i) => {
      li.style.opacity = 0;
      li.style.transform = "translateY(6px)";
      setTimeout(() => {
        li.style.transition = "opacity 400ms ease, transform 400ms ease";
        li.style.opacity = 1;
        li.style.transform = "translateY(0)";
      }, 600 + i * 220); // staggered reveal
    });
  });

// CONTACT JS

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const response = document.getElementById("response");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    response.innerHTML = "<p>Transmitting data...</p>";

    // Simulated message sending
    setTimeout(() => {
      response.innerHTML = "<p><strong>Overseer:</strong> Transmission received. The Operator will review your message shortly.</p>";
      form.reset();
    }, 2000);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll('a[href^="#"]');

  // Hide all sections at start
  sections.forEach(sec => sec.classList.remove("active"));

  // When you click a menu link
  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetID = link.getAttribute("href").replace(".html", "").replace("#", "");
      const targetSection = document.getElementById(targetID);

      // Clear visible content
      sections.forEach(sec => sec.classList.remove("active"));

      // Show selected section
      if (targetSection) {
        targetSection.classList.add("active");
        // Optional: add typing effect
        const textEls = targetSection.querySelectorAll("p, li");
        let i = 0;
        textEls.forEach(el => el.style.opacity = 0);
        function showLine() {
          if (i < textEls.length) {
            textEls[i].style.transition = "opacity 0.3s";
            textEls[i].style.opacity = 1;
            i++;
            setTimeout(showLine, 100);
          }
        }
        showLine();
      }
    });
  });
});

