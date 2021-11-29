/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
/* from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp */

function hideOrUnhide() {
    var x = document.getElementsByClassName("navLink");
    for( var i = 0; i<x.length; i++){
      if (x[i].style.display === "block") {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "block";
      }
    }

    document.getElementById("removeCenter").className = " ";
  }

/* the nav links need to be reset to hidden by default when small screen is reached*/
function reset() {
  hideOrUnhide(); // turns the pages into vertical blocks
  hideOrUnhide(); // removes pages, display to none
}


/*https://www.w3schools.com/howto/howto_css_menu_icon.asp*/
/* toggling from hamburger icon to X */
function myFunction(x) {
  x.classList.toggle("change");
}


//change the color of the button
function changeColor(){
    this.className = "col-fluid btn btn-dark text-white fw-bold";
}

function changeBack(){
    this.className = "col-fluid btn blue_bg text-white fw-bold";
}

// add eventListener to all the buttons 
//https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons
const buttons = document.querySelectorAll(".event_button");
buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('mouseover', changeColor);
  currentBtn.addEventListener('mouseleave', changeBack);
})
