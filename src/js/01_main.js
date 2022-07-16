if(window.innerWidth < 992){
    let map = document.querySelector(".map")
    if(map){
        map.onclick = function () {
            console.log(false)
            map.classList.add("map--active")
        }
    }
}
