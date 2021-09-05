// Homepage

function showHomepage() {
  // show homescreen
  document.getElementById("homepage").style.display = "block";

  // hide sub-homescreens
  document.getElementById("resume").style.display = "none";
}

// Sub-homescreens

function showResumePage() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("resume").style.display = "block";
}
