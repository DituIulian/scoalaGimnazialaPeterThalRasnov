/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



document.addEventListener("DOMContentLoaded", function() {
    fetch('/components/navbar.html') 
        .then(response => response.text()) 
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data; 
        })
        .catch(error => console.error('Eroare la încărcarea header-ului:', error));
});
