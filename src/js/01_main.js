if(window.innerWidth < 992){
    let map = document.querySelector(".map")
    if(map){
        map.onclick = function () {
            console.log(false)
            map.classList.add("map--active")
        }
    }
}

let selects = document.querySelectorAll("select")


selects.forEach(el => {
    el.onchange = function () {
        el.classList.add("select--active")
    }
})
