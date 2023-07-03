// Öffnen/Schließen des Dropdown-Menüs bei Klick auf den Button
document.getElementsByClassName("dropBtn")[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
  
  // Schließen des Dropdown-Menüs, wenn außerhalb davon getippt wird
  window.addEventListener("touchstart", function(event) {
    var dropdown = document.getElementsByClassName("dropdown")[0];
    if (!dropdown.contains(event.target)) {
      var dropdownContent = dropdown.getElementsByClassName("dropdown-content")[0];
      dropdownContent.style.display = "none";
      var dropBtn = dropdown.getElementsByClassName("dropBtn")[0];
      dropBtn.classList.remove("active");
    }
  });

  // Überprüfen, ob ein gespeicherter Farbmodus vorhanden ist
var savedColorMode = localStorage.getItem("colorMode");
if (savedColorMode) {
  // Überprüfen, ob der gespeicherte Farbmodus "dark" ist
  if (savedColorMode === "dark") {
    // Aktivieren des Dunkelmodus
    toggleColorTheme();
  }
}

function toggleColorTheme() {
  var body = document.body;
  body.classList.toggle("colorTheme");

  var mainColor = getComputedStyle(body).getPropertyValue("--main-color");
  var secColor = getComputedStyle(body).getPropertyValue("--sec-color");
  var linkColor = getComputedStyle(body).getPropertyValue("--link-color");

  if (body.classList.contains("colorTheme")) {
    // Dunkelmodus 
    body.style.setProperty("--main-color", "#cfcfcf");
    body.style.setProperty("--accent-color", "#0c0013");
    body.style.setProperty("--link-color", "rgb(30, 30, 30)");
    body.style.setProperty("--greeting", "rgba(25, 25, 25, 0.144");
    body.style.setProperty("--section-color", "rgb(30, 30, 30)");
    body.style.setProperty("--hover", "rgba(34, 34, 34, 0.075)");
    // Farbmodus im localStorage speichern
    localStorage.setItem("colorMode", "dark");
  } else {
    // Hellmodus
    body.style.setProperty("--main-color", "#0c0013");
    body.style.setProperty("--accent-color", "#cfcfcf");
    body.style.setProperty("--link-color", "rgb(224, 224, 0)");
    body.style.setProperty("--greeting", "rgba(255, 255, 255, 0.045)");
    body.style.setProperty("--section-color", "rgb(191, 191, 191)");
    body.style.setProperty("--hover", "rgba(255, 255, 255, 0.075)");
    // Farbmodus im localStorage speichern
    localStorage.setItem("colorMode", "light");
  }
}


  gsap.from('div, img', {opacity: 0, duration: 0.5, y: -40, stagger: 0.1})


  
  