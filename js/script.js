function move(){
    window.location.href="index.html"
}

function openNav() {
    var target = document.getElementById("side");
    var target2 = document.getElementById("side2");
    target.style.left = "0px";
    target2.style.display = "block";
    target2.style.animation = "fade-in 1s";
}

function closeNav() {
    var target = document.getElementById("side");
    var target2 = document.getElementById("side2");
    target.style.left = "-430px";
    target2.style.display = "none";
}
