////////////////////////////////////////////////////////////////////////////
//eventHandlers.js -- This file includes JavaScript functions used to handle
//user interaction and page navigation.
////////////////////////////////////////////////////////////////////////////

/* bindListenerToClassName -- Given a (CSS) class name, a function, and a listener type (e.g., "click"),
this function iterates through all elements with the class, binding the event listener function to 
the appropriate listener type. 
This is a utility function that allows us to bind the same function to all elements of a class. */
function bindListenerToClassName(className, func, listenerType) {
    var classes = document.getElementsByClassName(className);
    for (var i = 0; i < classes.length; ++i) {
      classes[i].addEventListener(listenerType,func);
    }
  }
  
  //menuBtn click: When the top-left side menu button is clicked, we need to act based on which icon is
  //presently displayed -- hamburger or left arrow. If hamburger, we need to check what mode we're in 
  //and what the current page is and change the menu contents accordingly. If left arrow, we need to hide
  //the menu.

  //used window.onload because it wont click and pop up without this
  window.onload = function (){
    this.document.getElementById("menuBtn").onclick = this.menuBtnClick;
    this.document.getElementById("aboutmeMode").onclick = this.bottomBtnClick;
    this.document.getElementById("portfolioMode").onclick = this.bottomBtnClick;
    this.document.getElementById("hobbiesMode").onclick = this.bottomBtnClick;
  }

  //function for when the menu button is clicked
  function menuBtnClick(e){
    if (!menuOpen) {
      document.getElementById("sideMenu").style.width = "250px"; //open up menu  
      document.getElementById("menuBtnIcon").classList.remove("fa-bars");
      document.getElementById("menuBtnIcon").classList.add("fa-times");
      menuOpen = true;
      e.stopPropagation;
    }
    else{
      document.getElementById("menuBtnIcon").classList.remove("fa-times"); //Change back to hamburger when menu closed
      document.getElementById("menuBtnIcon").classList.add("fa-bars");
      document.getElementById("sideMenu").style.width = "0"; //retract menu
      menuOpen = false;
    }
  }

  //document click: If the user clicks anywhere in the document while the side menu is open, we need to
  //close the menu, toggle the menu state, and re-enable all buttons/input fields on the page.
  window.addEventListener("mouseup", documentClick);

  function documentClick (e) {
    var sideMenu = document.getElementById("sideMenu");
    var hamburgerMenu = document.getElementById("menuBtnIcon");
    //document.getElementById("sideMenu").style.width = "250px"; //open up menu  

    if(e.target != hamburgerMenu && e.target.parentNode != hamburgerMenu && e.target != sideMenu){
      document.getElementById("menuBtnIcon").classList.remove("fa-times"); //Change back to hamburger when menu closed
      document.getElementById("menuBtnIcon").classList.add("fa-bars");
      sideMenu.style.width = "0";
      menuOpen = false;
      e.stopPropagation;
    }
  }

  //function for clicking the bottom buttons
  //code from class of w02c1
  function bottomBtnClick (e) {
    if (mode != this.id) {
      document.getElementById(mode).classList.remove("menuItemSelected");
      document.getElementById(mode + "Div").style.display = "none";
      document.getElementById(mode + "Menu").style.display = "none";
      this.classList.add("menuItemSelected");
      let menuItems = document.getElementsByClassName(mode + "Item");
      for (let i = 0; i < menuItems.length; ++i) {
        menuItems[i].style.display = "none";
      }
      mode = this.id;
      document.getElementById("topBarTitle").textContent = modeToTitle[mode];
      document.getElementById(mode + "Div").style.display = "block";
      document.getElementById(mode + "Menu").style.display = "block";
      menuItems = document.getElementsByClassName(mode + "Item");
      for (let i = 0; i < menuItems.length; ++i) {
        menuItems[i].style.display = "block";
      }
    }
    e.stopPropagation
  }