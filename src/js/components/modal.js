let modalTogglers = document.querySelectorAll("[data-modal]")
console.log(modalTogglers)
modalTogglers.forEach(el => {
    el.onclick = function () {
        let modalId = el.getAttribute("data-modal")
        let modal = document.querySelector(`#${modalId}`)
        modal.classList.add("modal--active")
        body.classList.add("fixed-body")
        modal.onclick = function () {
            this.classList.remove("modal--active")
            body.classList.remove("fixed-body")
        }

        document.querySelector(`#${modalId} .modal__dialog`).onclick = function (e) {
            e.stopPropagation()
        }

        document.querySelector(`#${modalId} .modal__close`).onclick = function (e) {
            modal.classList.remove("modal--active")
            body.classList.remove("fixed-body")
        }
    }
})
