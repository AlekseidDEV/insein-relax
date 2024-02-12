import { tabsSlider } from "./tabsslider"

export const repairBlock = () => {
    const repairBlock = document.querySelector('#repair-types')
    const repairModal = document.querySelector('.popup-repair-types')

    let count = 0
    
    repairBlock.addEventListener('click', (e) => {
        if(e.target.closest('.link-list') && e.target.localName === 'a'){
            repairModal.style.visibility = 'visible'
        } else if(e.target.matches('.repair-types-nav__item')){
            tabsSlider(e.target.classList[2].slice(-1), e.target)
        }
    })
}