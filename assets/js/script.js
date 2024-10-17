let mainClickCount = 0;
document.getElementById("clickable-image").addEventListener("click", function() {
    var bubble1 = document.getElementById("main-speech-bubble-1");
    var bubble2 = document.getElementById("main-speech-bubble-2");

    if (mainClickCount % 2 === 0) {
        bubble1.style.display = "block";
        bubble2.style.display = "none";
    } else {
        bubble1.style.display = "none";
        bubble2.style.display = "block";
    }
    mainClickCount++;
});
document.getElementById("image-1").addEventListener("click", function() {
    var bubble = document.getElementById("speech-bubble-1");
    if (bubble.style.display === "none" || bubble.style.display === "") {
        bubble.style.display = "block";
    } else {
        bubble.style.display = "none";
    }
});

// Toggle speech bubble for Image 2
document.getElementById("image-2").addEventListener("click", function() {
    var bubble = document.getElementById("speech-bubble-2");
    if (bubble.style.display === "none" || bubble.style.display === "") {
        bubble.style.display = "block";
    } else {
        bubble.style.display = "none";
    }
});

// Toggle speech bubble for Image 3
document.getElementById("image-3").addEventListener("click", function() {
    var bubble = document.getElementById("speech-bubble-3");
    if (bubble.style.display === "none" || bubble.style.display === "") {
        bubble.style.display = "block";
    } else {
        bubble.style.display = "none";
    }
});
