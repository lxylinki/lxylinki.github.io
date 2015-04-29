window.onload = rollinit;

function rollinit() {
    for (var i=0; i<document.images.length; i++) {
        setupRollover(document.images[i]);
    }
}

function setupRollover(thisImg) {
    // set properties to thisImg
    thisImg.outImage = new Image();
    thisImg.outImage.src = thisImg.src;
    
    thisImg.onmouseout = function() {
        this.src = this.outImage.src;
    }

    thisImg.overImage = new Image();
    thisImg.overImage.src = "pic/" + thisImg.id + "-color.jpg";
    thisImg.onmouseover = function() {
        this.src = this.overImage.src;
    }
}
