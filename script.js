const videoElem = document.getElementById("main-vid");

videoElem.onmouseover = function() {
    this.play();
}

videoElem.onmouseleave = function() {
    this.pause();
}