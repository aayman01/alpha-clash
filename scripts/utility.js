// home section hide function

function hiddenElementId(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}

// play ground section visible

function playElementId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function GetARandomAlphabet (){
    // get or create random string
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    // genarate a number between a 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
  
    // const currentElementById = document.getElementById('current-alphabet')
  
    // start new round
    const alphabet = alphabets[index];
    return alphabet;

}
function setBackgroundColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}
function removeBackgroundColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]')
}
// score update
function scoreUpdate (elementId){
    const currentScoreElement = document.getElementById(elementId);
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    let score = currentScore + 1;
    currentScoreElement.innerText = score;
    console.log(currentScore);
}