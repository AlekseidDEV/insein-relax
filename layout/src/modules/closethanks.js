export const closeThanks = () => {
    const popupThanks = document.querySelector('.popup-thank')

    popupThanks.style.visibility = 'visible'

    
    popupThanks.addEventListener('click', (e) => {
        if(e.target === popupThanks){
            popupThanks.style.visibility = 'hidden'
        } else if(e.target.matches('.close, .close-thank')){
            popupThanks.style.visibility = 'hidden'
        }
    })  
}