// Öffnen/Schließen des Dropdown-Menüs bei Klick auf den Button
document.getElementsByClassName("dropbtn")[0].addEventListener("click", function() {
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
      var dropbtn = dropdown.getElementsByClassName("dropbtn")[0];
      dropbtn.classList.remove("active");
    }
  });
  