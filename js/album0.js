window.onload = setBrowseFuncs;

var photos = new Array(
        "pic/album0/img2.jpg",
        "pic/album0/img3.jpg",
        "pic/album0/img4.jpg",
        "pic/album0/img5.jpg",
        "pic/album0/img6.jpg",
        "pic/album0/img7.jpg",
        "pic/album0/img8.jpg",
        "pic/album0/img9.jpg",
        "pic/album0/img11.jpg",
        "pic/album0/img12.jpg",
        "pic/album0/img13.jpg",
        "pic/album0/img14.jpg",
        "pic/album0/img15.jpg",
        "pic/album0/img16.jpg",
        "pic/album0/img17.jpg",
        "pic/album0/img18.jpg",
        "pic/album0/img19.jpg",
        "pic/album0/img20.jpg",
        "pic/album0/img21.jpg",
        "pic/album0/img22.jpg",
        "pic/album0/img23.jpg"
        );

// index of current displayed horizontal photo
var currpic = 0;

function setBrowseFuncs() {
    document.getElementById("prev").onclick = prevPic;
    setupRollover(document.getElementById("button")); 
}

function prevPic() {
    if (currpic == 0) {
        currpic = photos.length;
    }

    currpic = currpic-1;
    document.getElementById("album0pic").src = photos[currpic];
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
