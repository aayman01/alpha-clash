// function play(){
    
//     // console.log('you can play')
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden')
//     const playGroundSection = document.getElementById('playground-section');
//     playGroundSection.classList.remove('hidden')
// }

function play(){
    hiddenElementId('home-section');
    playElementId('playground-section');
    continueGame()
}
 
function continueGame(){
    const alphabet = GetARandomAlphabet();
    // console.log('Your Random Alphabet:' ,alphabet);

    // replacing with auto genarated alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

document.addEventListener('keyup',handleKeyboardButtonPress);

function handleKeyboardButtonPress (event){
    const playerPressed = event.key
    // console.log('key pressed:', playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed , expectedAlphabet);

    // checked matched or not

    if(playerPressed === expectedAlphabet){
        // console.log('you get a point');
        scoreUpdate('current-score');
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed you losed a life');
        // removeBackgroundColorById(playerPressed);
        
    }
}


