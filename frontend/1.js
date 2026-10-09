
const buton_rezervare = document.querySelector('#rezervare2')
const section = document.querySelector('#card2')

const buton_delete = document.querySelector('#delete-rezervare2')

buton_delete.addEventListener('click', () => {
    if (section.style.getPropertyValue('--culoare-background') === "#FF0000FF") {
        section.style.setProperty('--culoare-background', "#008000FF")
    }
})
buton_rezervare.addEventListener('click', () => {
    section.style.setProperty('--culoare-background', "#FF0000FF")
})
