document.addEventListener("DOMContentLoaded", function() {
    const heartButton = document.getElementById("heart-button");
    const heartContainer = document.getElementById("heart-container");
    const messageContainer = document.getElementById("message-container");
    const goBackButton = document.getElementById("go-back-button");

    heartButton.addEventListener("click", function() {
        heartButton.style.animation = "explode 0.6s forwards";
        setTimeout(() => {
            heartContainer.style.display = "none";
            messageContainer.style.display = "block";
        }, 600);
    });

    goBackButton.addEventListener("click", function() {
        heartButton.style.animation = "none";
        heartContainer.style.display = "block";
        messageContainer.style.display = "none";
    });
});
