// Response Message Functionality - About Us Page //

document.querySelector(".submit-button").addEventListener("click", viewResponse);

function viewResponse() {
    document.querySelector(".pop-up").style.visibility = "visible";
}

document.querySelector(".close-window").addEventListener("click", closeResponse);

function closeResponse() {
    document.querySelector(".pop-up").style.visibility = "hidden";
}