let mainClickCount = 0;
let actionCount = 0;
const mainSpeechBubble1 = document.getElementById("main-speech-bubble-1");
const speechBubble1 = document.getElementById("speech-bubble-1");
const speechBubble2 = document.getElementById("speech-bubble-2");
const speechBubble3 = document.getElementById("speech-bubble-3");
PlayButton = document.getElementById("play-button");

const actions =["plant my corn", "water my corn", "cut my corn", "carry my corn to the mill", "grind my corn", "knead the bread", "bake the bread", "eat the bread"];

function Play() {
    // hide play button
    PlayButton.style.display = "none";
    mainClickCount = 0;
    actionCount = 0;
    const anim = setInterval(function() {
        if(actionCount > 6){
            speechBubble1.innerText = "I will!";
            speechBubble2.innerText = "I will!";
            speechBubble3.innerText = "I will!";
        }
        switch (mainClickCount) {
            case 0:
                mainSpeechBubble1.innerText = `Who will help me ${actions[actionCount]}?`;
                mainSpeechBubble1.style.display = "block";
                break;
            case 1:

                speechBubble1.style.display = "block";
                break;
            case 2:
                speechBubble2.style.display = "block";
                break;
            case 3:
                speechBubble3.style.display = "block";
                break;
            case 4:
                mainSpeechBubble1.innerText = "Oh well i guess i will do it myself";
                speechBubble1.style.display = "none";
                speechBubble2.style.display = "none";
                speechBubble3.style.display = "none";
        
                
                break;

            case 5:
                if(actionCount > 6){
                    mainSpeechBubble1.innerText = `Oh no you wont il eat it my self!`;
                    // show play button
                    PlayButton.style.display = "block";
                    clearInterval(anim);

                }
                actionCount++;
                mainClickCount = -1;

            
            
        }
        mainClickCount++;
        console.log(mainClickCount);
    }, 3000);
}

PlayButton.addEventListener("click", Play);