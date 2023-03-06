

function pagecolorr(){



  //dark mode

  if(document.body.style.backgroundColor == "white") {

    //body
      document.body.style.backgroundColor = "black";
      document.body.style.color = "black";

    //buttons
      document.getElementById("but1").style.backgroundColor = "black";
      document.getElementById("but1").style.color = "black";
      document.getElementById("but1").style.borderColor = "black";

    //inputs
      document.getElementById("nom").style.backgroundColor = "black";
      document.getElementById("nom").style.color = "black";
      document.getElementById("nom").style.borderColor = "black";

      document.getElementById("message").style.backgroundColor = "black";
      document.getElementById("message").style.color = "black";
      document.getElementById("message").style.borderColor = "black";

      document.getElementById("email").style.backgroundColor = "black";
      document.getElementById("email").style.color = "black";
      document.getElementById("email").style.borderColor = "black";


  } else {
      document.body.style.backgroundColor = "white";
      document.getElementById("but1").style.backgroundColor = "#0275d8";
      document.getElementById("but1").style.color = "white";

      document.getElementById("nom").style.backgroundColor = "white";
      document.getElementById("nom").style.color = "black";
      document.getElementById("nom").style.borderColor = "black";

      document.getElementById("message").style.backgroundColor = "white";
      document.getElementById("message").style.color = "black";
      document.getElementById("message").style.borderColor = "black";

      document.getElementById("email").style.backgroundColor = "white";
      document.getElementById("email").style.color = "black";
      document.getElementById("email").style.borderColor = "black";
  }

  
}



var darkModeEnabled = false;
var activationTime;

function date(){
  

    darkModeEnabled = !darkModeEnabled;

    if (darkModeEnabled && !activationTime) {
      activationTime = new Date();
  
    }
  
    if (!darkModeEnabled && activationTime) {
      var deactivationTime = new Date();
      var timeDifference = deactivationTime.getTime() - activationTime.getTime();
      alert("Dark mode during " + (timeDifference / 1000) + " seconds");
      activationTime = null; 
    }


}