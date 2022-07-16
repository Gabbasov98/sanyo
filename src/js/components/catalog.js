let advantageBtn = document.querySelector(".key-advantages__btn")
let advantageText = document.querySelector(".key-advantages__text")

if(advantageBtn && advantageText){
    advantageBtn.onclick = () => {
        advantageText.classList.toggle("key-advantages__text--hidden")
    }
}
