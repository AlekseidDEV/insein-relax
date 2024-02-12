import { smoothScroll } from "./smoothscroll"

export const popupMenu = (cord, numb) => {
    const btnMenu = document.querySelector('.menu')
    const modalPopup = document.querySelector('.popup-menu')
    const dialogMenu = document.querySelector('.popup-dialog-menu')
    
    const repairModal = document.querySelector('.popup-repair-types')

    let statePopup = false

    const changeVisiblePopup = () => {
        if(statePopup){
            modalPopup.style.visibility = 'visible'
            dialogMenu.style.cssText = `${cord}: ${numb}px;`;
        } else{
            modalPopup.style.visibility = 'hidden'
            dialogMenu.style.cssText = `${cord}: 0px;`;
        }
    }

    btnMenu.addEventListener('click', () => {
        statePopup = true
        changeVisiblePopup()
    })
    modalPopup.addEventListener('click' ,(e) => {
        e.preventDefault()

       if(e.target === modalPopup || e.target.matches('.close-menu')){
        statePopup = false
        changeVisiblePopup()
       } else if(e.target.className === 'menu-link'){
            smoothScroll(e.target.hash.slice(1))
            statePopup = false
            changeVisiblePopup()
       } else if(e.target.matches('.menu-link , .no-overflow')){
            statePopup = false
            changeVisiblePopup()
            repairModal.style.visibility = 'visible'
       }
    })


}