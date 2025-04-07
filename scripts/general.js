function togglemblmenu() {
  var mblMenuLinks = document.querySelector("#mbl-links");
    
    if (mblMenuLinks.style.display === "block") {
        mblMenuLinks.style.display = "none";
    } else {
        mblMenuLinks.style.display = "block";
    }
}


var modal = document.getElementById("info-modal");
var close = document.getElementById("modal-close");
var opens = document.querySelectorAll(".modal-open"); // Select all elements with class 'modal-open'

// Loop through each element with class 'modal-open' and add an onclick event
opens.forEach(function(open) {
    open.onclick = function() {
        modal.style.display = "block";
    };
});

close.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
