//object with all of the words and definitions
const words = {
    "yes": [
        "noun",
        "Used to give an affirmative response.", 
        "Used as a response to someone addressing one or otherwise trying to attract one's attention."
    ],
    "panacea": [
        "noun",
        "An answer or solution for all problems or difficulties."
    ],
    "concatenation": [
        "noun",
        "A series of interconnected or interdependent things or events."
    ],
    "saw":[
        "verb",
        "Cut (something) using a saw",
        "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument"
    ],
    "found":[
        "adjective",
        "Having been discovered by chance or unexpectedly.",
        "(of a ship) Equipped; Supplied"
    ],
    "crane":[
        "verb",
        "Stretch out one's body or neck in order to see something",
        "Move (a heavy object) with a crane"
    ],
    "minute":[
        "noun",
        "A period of time equal to sixty seconds or a sixtieth of an hour.",
        "A sixtieth of a degree of angular measurement (symbol: ')"
    ],
    "grotesque":[
        "adjective",
        "Comically or repulsively ugly or distorted."
    ],
    "label":[
        "noun",
        "A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it"
    ],
    "debacle":[
        "noun",
        "A sudden and ignominious failure; a fiasco"
    ],
}
//variables for html stuff
var definitionReplace = document.getElementById("definition")
var wordsInput = document.getElementById("wordInput")

    //1. have code read the input (That's the onclick in the index.html file)
function findDefinition(){
    //2. change input casing to streamline the code reading it
    if(wordsInput && wordsInput.value){
        let lcWordsInput = wordsInput.value.toLowerCase();
        //3. find if it is a registered word in the object "words"
        // for(i = 0; i < words; i++){
            if(words.hasOwnProperty(lcWordsInput)){
                const definition = words[lcWordsInput].join("<br")
                definitionReplace.innerText = definition;
            }else{
                definitionReplace.innerText = "I'm sorry, that word is not registered in the dictionary."
            }
    }else{
        definitionReplace.innerText = "Invalid input"
    }

        //a. output word, PoS, & definition if it is in the dictionary
        //b. if not, output "I'm sorry, that word is not registered in the dictionary"
}

//Ask Is the mama and Not the mama wtf is wrong with my code :/