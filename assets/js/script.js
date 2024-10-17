document.getElementById("clickable-image").addEventListener("click", function() {
    var bubble = document.getElementById("speech-bubble");
    if (bubble.style.display === "none" || bubble.style.display === "") {
        bubble.style.display = "block";
    } else {
        bubble.style.display = "none";
    }
});