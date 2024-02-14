function hiddenElementId(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}
function playElementId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}