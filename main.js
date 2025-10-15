document.addEventListener("DOMContentLoaded", function() {
  const lines = [
    "ACCESS GRANTED // PERSONAL DATABASE ONLINE",
    "Clearance Level: PUBLIC",
    "Loading portfolio modules...",
    "Initializing user interface [OK]",
    "Verifying system integrity [OK]",
    "Decrypting memory sectors...",
    "Loading user profile: SKiTNet_Profile",
    "Establishing secure link...",
    "Connection stable. System ready for exploration.",
    "",
    '<ul>' +
      '<li><a href="aboutMe.html">Access File: ABOUT_ME.sys</a></li>' +
      '<li><a href="project.html">Access File: PROJECTS_DATABASE.sys</a></li>' +
      '<li><a href="contact.html">Access File: CONTACT_PROTOCOL.sys</a></li>' +
      '<li><a href="#">Access File: EXPERIENCE_ARCHIVE.SYS</a></li>' +
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
    }
  }

  typeLine();
});