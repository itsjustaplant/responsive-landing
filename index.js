const hamburger = document.getElementById("hamburger")
const img = document.getElementById("hamburgerImg")
const collapsed = document.getElementById("collapsed")
const hero = document.getElementById("hero")

hamburger.addEventListener('click',() => {
    if(collapsed.style.display === ""){
        collapsed.style.animation = "show 1s forwards"
        collapsed.style.display = "flex"
        hero.style.display = "none"
        hero.style.opacity = "0"
        img.src = "./close_white_48dp.svg"
    } else{
        hero.style.animation = "show 1s forwards"
        collapsed.style.display = ""
        hero.style.display = "flex"
        img.src = "./menu_white_48dp.svg"
    }
})