
/*James O’Beirne
M4.257 - Herramientas HTML y CSS aula 1
PEC3 / 11 de junio de 2021*/


const fabric = require("fabric").fabric;

window.onload = function (event) {
    var canvas = new fabric.Canvas('c');
    var imgElement = document.getElementById('my-image');
    var imgInstance = new fabric.Image(imgElement, {
        left: 60,
        top: 60,
        angle: 30
    });
    canvas.add(imgInstance);
}


/*hamburger menu toggle on/off*/
let hamburger_button = document.getElementById("toggle");
let menu = document.querySelector(".small_sreen_header_navigation");
let close_hamburger_button = document.getElementById("close_menu");
menu.style.display = "none";

hamburger_button.addEventListener("click", function display() {
    menu.style.display = "block";
});

close_hamburger_button.addEventListener("click", function closeMenu() {
    menu.style.display = "none";
});
