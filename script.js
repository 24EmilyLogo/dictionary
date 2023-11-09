//object with all of the words and definitions
const words = {
    "yes": {
        pos:"noun",
        defs:[
            "Used to give an affirmative response.", 
            "Used as a response to someone addressing one or otherwise trying to attract one's attention."
        ]
    },
    "panacea": {
        pos:"noun",
        defs:["An answer or solution for all problems or difficulties."]
    },
    "concatenation": {
        pos:"noun",
        defs: ["A series of interconnected or interdependent things or events."]
    },
    "saw":{
        pos:"verb",
        defs:[
            "Cut (something) using a saw",
            "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument"
        ]
    },
    "found":{
        pos:"adjective",
        defs:[
            "Having been discovered by chance or unexpectedly.",
            "(of a ship) Equipped; Supplied"
        ]
    },
    "crane":{
        pos:"verb",
        defs:[
            "Stretch out one's body or neck in order to see something",
            "Move (a heavy object) with a crane"
        ]
    },
    "minute":{
        pos:"noun",
        defs:[
            "A period of time equal to sixty seconds or a sixtieth of an hour.",
            "A sixtieth of a degree of angular measurement (symbol: ')"
        ]
    },
    "grotesque":{
        pos:"adjective",
        defs:["Comically or repulsively ugly or distorted."]
    },
    "label":{
        pos:"noun",
        defs:["A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it"]
    },
    "debacle":{
        pos:"noun",
        defs:["A sudden and ignominious failure; a fiasco"]
    },
    "dnd":{
        pos:"noun",
        defs:[
            "A game played by 1 or more players using dice, character, sheets, and imagination. The term Dungeons and Dragons is trademarked."
        ]
    },
}
//variables for html stuff
var definitionReplace = document.getElementById("definition")
var wordsInput = document.getElementById("wordInput")
var wordCheck = document.getElementById("findWord")

    //1. have code read the input (That's the onclick in the index.html file)
function findDefinition(){

    //for(i=0; i < words.hasOwnProperty; i++){
     
        //2. change input casing to streamline the code reading it
            let lcWordsInput = wordsInput.value.toLowerCase();
        
        //3. find if it is a registered word in the object "words"
        // for(i = 0; i < words; i++){
            if(words.hasOwnProperty(lcWordsInput)){
                //gets the word information (the data stored in the object ex: "yes": "pos")
                const wordInfo = words[lcWordsInput];
                //dsplays the word, pos, and definition as a string
                const definition = `${lcWordsInput} (${wordInfo.pos}): ${wordInfo.defs.join("\n")}`
                definitionReplace.innerText = definition;
            }else{
                definitionReplace.innerText = "That word is not registered in the dictionary."
            }
        // }else{
        //     definitionReplace.innerText = "Invalid input"
        // }
    //}

        //a. output word, PoS, & definition if it is in the dictionary
        //b. if not, output "I'm sorry, that word is not registered in the dictionary"
}

wordCheck.addEventListener("click", findDefinition)