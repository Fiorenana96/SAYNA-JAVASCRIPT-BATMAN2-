function myScrollFunc(element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }
  
  //Bouton vers le héros et vers les ennemies
  document.querySelector("#seeHero").addEventListener('click', () => {
    myScrollFunc(document.querySelector(".hero"));
  })
  document.querySelector("#seeEnemies").addEventListener('click', () => {
    myScrollFunc(document.querySelector(".ennemies"));
  })

  //Popup Box
const myForm = document.querySelector(".sec7__form")
const popupDiv = document.querySelector(".popupBox")
const email = document.querySelector("#userMail")
const invalidMail = document.querySelector(".invalidMail")
const message = document.querySelector("#message")
const warningMessage = document.querySelector(".warningMessage")
myForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    if (email.value === "") {
        invalidMail.innerText = "Champ obligatoire: Entrez votre addresse mail !"
        invalidMail.style.color = "red"
        return
    } else if(message.value ==="") {
        warningMessage.innerText = "Champ obligatoire: Entrez votre message !"
        warningMessage.style.color = "red"
        return
    }
    popupDiv.style.display = "block"
})


document.addEventListener("click", ()=> {
    popupDiv.style.display = "none"
    invalidMail.innerText = ""
    warningMessage.innerText = ""
})