
function crocName() {
    //create a switch to determine which action to take based on the input value
    var buttonID = sessionStorage.getItem('buttonID');
    console.log(buttonID);

    // if (buttonID === "daisy") {
    //     document.querySelector(".croc-name").innerHTML = "Daisy"
    // }

    // else if (buttonID === "milo") {
    //     document.querySelector(".croc-name").innerHTML = "Milo"
    // }
    // else {
    //     console.log("unknown")
    // }

    switch (buttonID) {
        case "daisy":
            document.querySelector(".croc-name").innerHTML = "Daisy";
            document.querySelector(".croc-image").src = "images/croc1.jpeg";
            break;
        case "milo":
            document.querySelector(".croc-name").innerHTML = "Milo";
            document.querySelector(".croc-image").src= "images/croc2.jpeg";
            break;
        case "charlie":
            document.querySelector(".croc-name").innerHTML = "Charlie";
            document.querySelector(".croc-image").src= "images/croc3.jpeg";
            break;
        case "bruce":
            document.querySelector(".croc-name").innerHTML = "Bruce";
            document.querySelector(".croc-image").src= "images/croc4.jpeg";
            break;
        case "otis":
            document.querySelector(".croc-name").innerHTML = "Otis";
            document.querySelector(".croc-image").src= "images/croc5.jpeg";
            break;
        case "sultan":
            document.querySelector(".croc-name").innerHTML = "Sultan";
            document.querySelector(".croc-image").src= "images/croc6.webp";
            break;
        default: console.log(event);
    }
 }
