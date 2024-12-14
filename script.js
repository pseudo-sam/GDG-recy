// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("demo-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to create confetti
function generateConfetti() {
    let confettiContainer = document.querySelector(".party-animation");

    // Number of confetti pieces
    let numberOfPieces = 30;

    for (let i = 0; i < numberOfPieces; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Randomize the position and animation properties for the confetti
        confetti.style.left = `${Math.random() * 100}%`;  // Random x position
        confetti.style.animationDuration = `${Math.random() * 1 + 2}s`; // Randomize fall speed
        confetti.style.animationDelay = `${Math.random() * 1}s`; // Randomize when they fall

        // Add the confetti to the container
        confettiContainer.appendChild(confetti);
    }
}

// Countdown Function for New Year
function startCountdown() {
    // Set the date we're counting down to
    var newYearDate = new Date("January 1, 2025 00:00:00").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function () {
        // Get the current date and time
        var now = new Date().getTime();

        // Find the difference between now and the target date
        var distance = newYearDate - now;

        // Time calculations for days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown in the "countdown" div
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is finished, display the message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "New Year has arrived!";
        }
    }, 1000);
}

// When the user clicks on the button, show countdown and modal and add confetti
document.getElementById("preview-btn").onclick = function () {
    // Show the countdown section when Preview button is clicked
    document.getElementById("countdown").style.display = "block";

    // Start the countdown function
    startCountdown();
};

// When the user clicks on the button, open the modal and add confetti
btn.onclick = function () {
    modal.style.display = "block";
    generateConfetti();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    // Clear all confetti on closing
    document.querySelector(".party-animation").innerHTML = "";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // Clear confetti
        document.querySelector(".party-animation").innerHTML = "";
    }
}
