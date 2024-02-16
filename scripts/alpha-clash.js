// function play(){
    
//     // console.log('you can play')
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden')
//     const playGroundSection = document.getElementById('playground-section');
//     playGroundSection.classList.remove('hidden')
// }

function play(){
    // hide everthing show play section
    hiddenElementId('home-section');
    hiddenElementId('final-score')
    showElementId('playground-section');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame()
}

function gameOver(){
    hiddenElementId('playground-section');
    showElementId('final-score');

    // update final score
    const lastScore = getTextElementValueById('current-score')
    console.log('your final score is:',lastScore);
    setTextElementValueById('game-score',lastScore); 

    // remove last selected highlight

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

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
    console.log('key pressed:', playerPressed);

    // restart the the game
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed , expectedAlphabet);

    // checked matched or not

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore)
        
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

        // ------------------------------------------
        // setTextElementValueById('current-score',updateScore)
        // scoreUpdate('current-score');
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // let score = currentScore + 1;
        // currentScoreElement.innerText = score;
        // -------------------------------------------

    }
    else{
        console.log('you missed you losed a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);

        if(updatedLife === 0){
            console.log('game over');
            gameOver();
        }
        
        // ---------------------------------------------
        // lifeUpdate('current-life');
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // let life = currentLife - 1;
        // currentLifeElement.innerText = life;
        
    }
}


