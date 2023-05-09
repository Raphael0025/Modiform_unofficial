function move(){
    window.location.href="../screens/dash.html"
}
function move3(){
    window.location.href="../screens/hm-w.html"
}
function move2hm(){
    window.location.href="../screens/hm-m.html"
}
function moveTM(){
    window.location.href="../screens/tm-m.html"
}
function logout(){
    window.location.href="/"
}

function showITW(){
    window.location.href="../screens/IT-W.html"
}

function back(){
    window.location.href="../screens/dash.html"
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
function showMain(){
    var target3 = document.getElementById("IT-m");
    var target4 = document.getElementById("IT-l");
    var target5 = document.getElementById("IT-u");
    var target = document.getElementById("container");
    target.style.display = "block"
    target.style.animation = "fade-in 1s";

    target3.style.display = "none"
    target4.style.display = "none"
    target5.style.display = "none"
    closeNav();
}
function showIT(){
    var target = document.getElementById("container");
    var target2 = document.getElementById("IT-m");
    var target3 = document.getElementById("IT-l");
    var target4 = document.getElementById("IT-u");
    target.style.display = "none"
    target2.style.display = "block"
    target3.style.display = "flex"
    target4.style.display = "flex"
}
