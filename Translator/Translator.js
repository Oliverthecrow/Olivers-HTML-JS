let WIW = window.innerWidth;
let WIH = window.innerHeight;

let EnglishWords = ["Hello", "There", "I", "am", "here", "to", "talk", "to", "you", "about", "your", "cars", "extended", "warranty", "over", "and", "stop", "yes"]
let PirateWords = ["Ahoy", "thar", "I", "am", "here", "t'", "natter", "t'", "ye", "about", "yer", "cars", "extended", "warranty", "o'er", "'n", "avast", "aye"]
let translatedwords = []

let translatedword;
let searchedwords;
let searched;

let pirate;

function setup() {
    let canvas = createCanvas(WIW, WIH);
    canvas.parent('TranslatorCanvas');
    textAlign(CENTER)
    WordsInConsole();
    pirate = loadImage('pirate.jpg')
}
function draw() {
    image(pirate, 0, 0, WIW, WIH)
    fill(255, 50, 50);
    textSize(50);
    text("Press S to translate from english to pirate, P for the opposite", WIW * 0.5, WIH * 0.1);
    text("Ahoy maties, welcome to ye translater",WIW*0.5,WIH*0.8)
    textSize(60)
    text(translatedword, WIW * 0.5, WIH * 0.35);
    textSize(40);
    text("Previously Translated Words:", WIW * 0.15, WIH * 0.2);
    textSize(18)
    text("list of current english words: " + EnglishWords, WIW * 0.3, WIH * 0.93)
    textSize(40);


    //previous translated words
    for (searched = 0; searched < 4; searched++) {
        text(translatedwords[searched], WIW * 0.15, WIH * 0.3 + searched * 75)
    }
}
function keyPressed() {
    if (key === "s" || key === "S") { searchedwords = window.prompt("What do you want to translate to pirate from english"); search(); }
    else if (key === "p" || key === "P") { searchedwords = window.prompt("What do you want to translate to english from pirate"); searchPirateToEnglish(); }
}
function search() {
    let words = searchedwords.split(" "); // Split the input sentence into an array of words
    let translatedSentence = [];
    let found = false;
    //checks to see if word entered matches someting in arrays
    for (let word of words) {
        found = false;
        for (let i = 0; i < EnglishWords.length; i++) {
            if (word.toLowerCase() === EnglishWords[i].toLowerCase()) {
                translatedSentence.push(PirateWords[i]);
                found = true;
                break;
            }
        }
        //allows user to add translation to new words
        if (!found) {
            let newPirateWord = window.prompt("The word '" + word + "' is not in our database, enter the pirate translation to this word to add to our database if you want");
            EnglishWords.push(word)
            PirateWords.push(newPirateWord);
            translatedSentence.push(newPirateWord);
        }
    }
    translatedword = translatedSentence.join(" ");
    translatedwords.push(translatedword);
} //same as above just for pirate to english
function searchPirateToEnglish() {
    let words = searchedwords.split(" ");
    let translatedSentence = [];

    for (let word of words) {
        let found = false;

        for (let i = 0; i < PirateWords.length; i++) {
            if (word.toLowerCase() === PirateWords[i].toLowerCase()) {
                translatedSentence.push(EnglishWords[i]);
                found = true;
                break; // Exit the loop once a match is found
            }
        }

        if (!found) {
            translatedSentence.push("[" + word + "]");
            let newPirateWord = word;
            let newEnglishWord = window.prompt("Enter translation to english for: " + word);
            PirateWords.push(newPirateWord);
            EnglishWords.push(newEnglishWord);
        }
    }

    translatedword = translatedSentence.join(" ");
    translatedwords.push(translatedword);
}
//prints all words to console to make testing easier
function WordsInConsole() {
    for (let i = 0; i < EnglishWords.length; i++) {
        console.log("English Word: " + EnglishWords[i] + " Pirate Word: " + PirateWords[i]);
    }
}
function windowResized() {
    resizeCanvas(WIW, WIH);
}