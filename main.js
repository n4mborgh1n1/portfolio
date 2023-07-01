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
    var linkColor = getComputedStyle(body).getPropertyValue("--link-color");
    
    if (body.classList.contains("colorTheme")) { /* Press Button to switch to light mode */
      body.style.setProperty("--main-color", "#cfcfcf"); /* grey */
      body.style.setProperty("--accent-color", "#0c0013"); /* dark purple */
      body.style.setProperty("--link-color", "rgb(30, 30, 30)"); /* dark grey */
    } else {
      body.style.setProperty("--main-color", "#0c0013"); /* dark purple */
      body.style.setProperty("--accent-color", "#cfcfcf"); /* grey */
      body.style.setProperty("--link-color", "rgb(224, 224, 0)"); /* yellow */

    }
  }
  
  