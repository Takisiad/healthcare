// Variables:
homeSection = document.getElementById("section-one")
chatSection = document.getElementById("section-two")
botSection = document.getElementById("section-three")



// Methods:
function enterHome(){
    homeSection.style.display = "block"
    chatSection.style.display = "none"
    botSection.style.display = "none"
}

function enterChat(){
    homeSection.style.display = "none"
    chatSection.style.display = "block"
    botSection.style.display = "none"
}

function enterBot(){
    homeSection.style.display = "none"
    chatSection.style.display = "none"
    botSection.style.display = "block"
}