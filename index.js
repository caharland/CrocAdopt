
     var numberOfAdoptButtons = document.querySelectorAll(".btn").length;
     
     for (var i = 0; i<numberOfAdoptButtons; i++) {
     //identify a button that was clicked
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        sessionStorage.setItem("buttonID", this.id);
        console.log(buttonID); //log the button id to check it
       })
    }
