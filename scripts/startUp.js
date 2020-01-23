//Start-up functions run when page is loaded.
includeHTML();
//Hide all pages except for Activity Feed, which is the start page.
document.getElementById("portfolioModeDiv").style.display = "none";
document.getElementById("hobbiesModeDiv").style.display = "none";
document.getElementById("portfolioModeMenu").style.display = "none";
document.getElementById("hobbiesModeMenu").style.display = "none";

//Set up UI state
var menuOpen = false; //Boolean variable to capture the state of the side menu.

var modeToTitle = {"aboutmeMode": "MARCO ARES IA1: ABOUT ME",
                   "portfolioMode": "MARCO ARES IA1: PORTFOLIO",
                   "hobbiesMode": "MARCO ARES IA1: HOBBIES"};

var mode = "aboutmeMode"; //Variable captures current UI mode
document.getElementById(mode).classList.add("menuItemSelected");


//hiding parts of the pages
