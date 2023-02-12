const videoElem = document.getElementsByTagName("video");

videoElem[0].onmouseover = function() {
    this.play();
}

videoElem[0].onmouseleave = function() {
    this.pause();
}