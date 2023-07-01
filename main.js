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
  
  // Schließen des Dropdown-Menüs, wenn außerhalb davon geklickt wird
  window.addEventListener("click", function(event) {
    var dropdown = document.getElementsByClassName("dropdown")[0];
    if (!dropdown.contains(event.target)) {
      var dropdownContent = dropdown.getElementsByClassName("dropdown-content")[0];
      dropdownContent.style.display = "none";
      var dropBtn = dropdown.getElementsByClassName("dropBtn")[0];
      dropBtn.classList.remove("active");
    }
  });

  function toggleColorTheme() {
    var body = document.body;
    body.classList.toggle("colorTheme");
  
    var mainColor = getComputedStyle(body).getPropertyValue("--main-color");
    var secColor = getComputedStyle(body).getPropertyValue("--sec-color");
  
    if (body.classList.contains("colorTheme")) {
      body.style.setProperty("--main-color", "#cfcfcf"); 
      body.style.setProperty("--sec-color", "#0c0013"); 
    } else {
      body.style.setProperty("--main-color", "#0c0013"); 
      body.style.setProperty("--sec-color", "#cfcfcf"); 
    }
  }
  
  