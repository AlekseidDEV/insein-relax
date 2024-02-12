export const popupConsult = () => {
    const popupConsul = document.querySelector('.popup-consultation')

    popupConsul.style.visibility = 'visible'

    popupConsul.addEventListener('click', (e) => {
        if(e.target === popupConsul || e.target.closest('.close')){
            popupConsul.style.visibility = 'hidden'
        }
    })
}