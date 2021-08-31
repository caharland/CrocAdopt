
//add event listener to Submit button
var numberOfAdoptButtons = document.querySelectorAll(".btn").length;
     for (var i = 0; i<numberOfAdoptButtons; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", submitButton) 
       };

function crocName() {
    //create a switch to determine which action to take based on the input value
    var buttonID = sessionStorage.getItem('buttonID');
    console.log(buttonID);
    
    switch (buttonID) {
        case "Daisy":
            document.querySelector(".croc-name").innerHTML = "Daisy";
            document.querySelector(".croc-image").src = "images/croc1.jpeg";
            break;
        case "Milo":
            document.querySelector(".croc-name").innerHTML = "Milo";
            document.querySelector(".croc-image").src= "images/croc2.jpeg";
            break;
        case "Charlie":
            document.querySelector(".croc-name").innerHTML = "Charlie";
            document.querySelector(".croc-image").src= "images/croc3.jpeg";
            break;
        case "Bruce":
            document.querySelector(".croc-name").innerHTML = "Bruce";
            document.querySelector(".croc-image").src= "images/croc4.jpeg";
            break;
        case "Otis":
            document.querySelector(".croc-name").innerHTML = "Otis";
            document.querySelector(".croc-image").src= "images/croc5.jpeg";
            break;
        case "Sultan":
            document.querySelector(".croc-name").innerHTML = "Sultan";
            document.querySelector(".croc-image").src= "images/croc6.webp";
            break;
        default: console.log(event);
    }
};

//form collection and logging
function submitButton() {
    var crocName = sessionStorage.getItem('buttonID');
    var firstName = document.getElementById("firstName").value; //collect customer name
    var customerPhone = document.getElementById("inputPhone").value; //collect phone number
    var customerEmail = document.getElementById("inputEmail4").value //collect email address
    var sendMessage = document.getElementById("gridCheck").checked //checkbox selection

    var confirmMessage = document.getElementById("confirmation");
    confirmMessage.style.visibility="visible"; //make message visible
    
    console.log(customerPhone);
    console.log(sendMessage); 
    console.log("submit was pressed"); 

    //send confirmation email and sms

    fetch('https://crocadopt2-5294-dev.twil.io/send_confirmation', 
    {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({firstName, customerPhone, customerEmail, sendMessage, crocName}) // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}