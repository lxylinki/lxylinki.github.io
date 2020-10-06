window.onload = setBrowseFuncs;

var photos = new Array(
        "pic/album1/img1.jpg",
        "pic/album1/img0.jpg",
        "pic/album1/img3.jpg",
        "pic/album1/img4.jpg",
        "pic/album1/img5.jpg",
        "pic/album1/img6.jpg",
        "pic/album1/img7.jpg",
        "pic/album1/img8.jpg",
        "pic/album1/img9.jpg",
        "pic/album1/img10.jpg",
        "pic/album1/img11.jpg"
        );

// index of current displayed vertical photo
var currpic = 0;

function setBrowseFuncs() {
    document.getElementById("next").onclick = nextPic;
    setupRollover(document.getElementById("button"));
}

function nextPic() {
    currpic = currpic+1;

    if (currpic == photos.length ) {
        currpic = 0;
    }
    document.getElementById("album1pic").src = photos[currpic];
    return false;
}

function setupRollover(thisImg) {
    // set properties to thisImg
    thisImg.outImage = new Image();
    thisImg.outImage.src = thisImg.src;
    
    thisImg.onmouseout = function() {
        this.src = this.outImage.src;
    }

    thisImg.overImage = new Image();
    thisImg.overImage.src = "pic/" + thisImg.id + "_solid.png";
    thisImg.onmouseover = function() {
        this.src = this.overImage.src;
    }
}
