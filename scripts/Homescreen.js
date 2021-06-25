// Homepage

function showHomepage() {
  // show homescreen
  document.getElementById("homepage").style.display = "block";

  // hide sub-homescreens
  document.getElementById("writing").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("resume").style.display = "none";
  document.getElementById("iOS").style.display = "none";
}

// Sub-homescreens

function showWritingPage() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("writing").style.display = "block";
}

function showiOSPage() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("iOS").style.display = "block";
}

function showSkillsPage() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("skills").style.display = "block";
}

function showResumePage() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("resume").style.display = "block";
}

function showContactPage() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("contact").style.display = "block";
}
