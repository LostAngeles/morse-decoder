const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    
        //for answer
        let answer = "";
        let editingAnswer = "";
        let wordComplete = "";
    
        let str = expr; 
    
        let incoming = []; // get separeted words
        incoming = str.split('**********');
           
        let wordInSymbols = ""; // for words in symbols
        let counter = 0; // for cutting 10 symbols words
        let singleWord = [];
    
        let letters = [];
    
        for (let i = 0; i < incoming.length; i++) {
            wordInSymbols = incoming[i].split("");                              // words in symbols
                //alert ("Слово " + i + ": " + wordInSymbols);					// separete words
                //alert ("Длина " + i + "строчки: " + wordInSymbols.length);
    
                let tempWordInSymbolsLength = (wordInSymbols.length/10);        // Length of word/10 = amount of letters
    
                for (let j = 0; j < (tempWordInSymbolsLength); j++ ) {
                    letters[j] = wordInSymbols.splice(0, 10);                   // Separete word by letters
                }
            answer = answer + getEnglish(letters) + "-";
            letters = [];
            editingAnswer = (answer.replace(/-/g, " ")).slice(0,-1); // 
            
        }
        
    
        // usefull
    
        function getEnglish(letters) {
            let result = "";
            let temp = "";
            let tempLength = 0;
            //alert(letters);
    
            for (let s = 0; s < letters.length; s++){
                //alert (letters[s]);
                temp = letters[s];
                tempLength = temp.length;
                //alert (tempLength);
                
                for (let g = 0; g < tempLength; g++){                   // remove zeros
                    if (temp[0] == 0) temp.splice(0,1);
                }
                //alert(temp);
                result = result + match(temp);
                if (letters.length == result.length) wordComplete = result;  // if word complete return word
                //alert(result);
                            
            }
            return wordComplete;
        }
    
        function match(temp) {                       //  Determine English letter
            let set = Number(temp.join(""));
            //alert(set);
            //alert(typeof(set));
            let translation;
    
            switch (set) {
                case 1011:
                translation = "a";
                break;
    
                case 11101010:
                translation = "b";
                break;
    
                case 11101110:
                translation = "c";
                break;
    
                case 111010:
                translation = "d";
                break;
    
                case 10:
                translation = "e";
                break;
    
                case 10101110:
                translation = "f";
                break;
    
                case 111110:
                translation = "g";
                break;
    
                case 10101010:
                translation = "h";
                break;
    
                case 1010:
                translation = "i";
                break;
    
                case 10111111:
                translation = "j";
                break;
    
                case 111011:
                translation = "k";
                break;
    
                case 10111010:
                translation = "l" ;
                break;
    
                case 1111:
                translation = "m";
                break;
    
                case 1110:
                translation = "n";
                break;
    
                case 111111:
                translation = "o";
                break;
    
                case 10111110:
                translation = "p";
                break;
    
                case 11111011:
                translation = "q";
                break;
    
                case 101110:
                translation = "r";
                break;
    
                case 101010:
                translation = "s";
                break;
    
                case 11:
                translation = "t";
                break;
    
                case 101011:
                translation = "u";
                break;
    
                case 10101011:
                translation = "v";
                break;
    
                case 101111:
                translation = "w" ;
                break;
    
                case 11101011:
                translation = "x";
                break;
    
                case 11101111:
                translation = "y";
                break;
    
                case 11111010:
                translation = "z";
                break;
    
                case 1011111111:
                translation = "1";
                break;
    
                case 1010111111:
                translation = "2";
                break;
    
                case 1010101111:
                translation = "3";
                break;
    
                case 1010101011:
                translation = "4";
                break;
    
                case 1010101010:
                translation = "5";
                break;
    
                case 1110101010:
                translation = "6";
                break;
    
                case 1111101010:
                translation = "7";
                break;
    
                case 1111111010:
                translation = "8";
                break;
    
                case 1111111110:
                translation = "9";
                break;
    
                case 1111111111:
                translation = "0";
                break;
            }
            //alert(translation);
            return translation;
        }
    
        return editingAnswer;    
    }   
    


module.exports = {
    decode
}