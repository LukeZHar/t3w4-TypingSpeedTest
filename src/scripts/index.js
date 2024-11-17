console.log("Typing Speed Test Begins!!"); 

// Element selectors
const playButton = document.getElementById("playButton");
const inputField = document.getElementById("inputField");
const sentenceDisplay = document.getElementById("sentenceDisplay");
const resultsSection = document.getElementById("resultsSection");

// Sentence Fetching
async function getRandomSentence(wordCount) {
    try {
        const response = await fetch(`https://random-word-api.herokuapp.com/word?number=${wordCount}`);
        const data = await response.json();
        let sentence = data.join(", ");
        console.log(sentence);
        return sentence;
    } catch (error) {
        console.error("Failed fetching sentence:", error);
        return "Error Loading sentence, please try again.";
    }
};

async function displaySentence(){
    // fetch random sentence with 10 words
    const randomSentence = await getRandomSentence(10);
    // Display the sentence in HTML content
    sentenceDisplay.textContent = randomSentence;
}

// event listeners
playButton.addEventListener("click", startGame);

//  Start the game function 
function startGame(){
    inputField.value = "";
    resultsSection.innerHTML = "";
    displaySentence();

    //  Show necessary elements
    inputField.style.display = "block";
    sentenceDisplay.style.display = "block";
}

function trackTyping(){
    
}
