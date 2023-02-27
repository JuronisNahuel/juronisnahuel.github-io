//panal

var beehive = document.getElementById("beehive");
var bees = document.querySelectorAll("#beehive img");

function moveBees() {
  for (var i = 0; i < bees.length; i++) {
    var bee = bees[i];
    var x = Math.floor(Math.random() * (beehive.clientWidth - bee.width));
    var y = Math.floor(Math.random() * (beehive.clientHeight - bee.height));
    bee.style.left = x + "px";
    bee.style.top = y + "px";
  }
  setInterval(moveBees, 3000);
}

moveBees();

document.addEventListener('DOMContentLoaded', () => {
  const botonSubir = document.getElementById('subir');

  botonSubir.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// hamburguesa
var menu = document.querySelector('.hamburger');

function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}


menu.addEventListener('click', toggleMenu, false);
 

// boton de sujerencias
var container = document.getElementById("button-container");
var button = document.getElementById("moveable-button");

button.addEventListener("click", function() {  

  // animación la transparencia del botón
  var opacity = 1;
  var interval = setInterval(function() {
    opacity -= 0.1;
    button.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(interval);
    }
  }, 100);

  // elimina el botón del DOM después de 2 segundos
  setTimeout(function() {
    button.parentNode.removeChild(button);
  }, 2000);
});
//boton escapa!
var button = document.getElementById("moveable-button");

button.addEventListener("mouseover", function() {
  button.classList.add("hover");
});

button.addEventListener("click", function(event) {
  event.preventDefault();
});

