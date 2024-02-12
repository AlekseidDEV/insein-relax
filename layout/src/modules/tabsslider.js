import { sliderType } from "./slidertype" 

export const tabsSlider = (indexSlider, target) => {
    const activeBtn = document.querySelector('.repair-types-nav__item.active')
    const activeSlider = document.querySelector('.active_slider')
    const slidersType = document.querySelectorAll('.repair-types-slider > div')
    
    activeBtn.classList.remove('active')
    target.classList.add('active')

    activeSlider.classList.remove('active_slider')
    slidersType[indexSlider - 1].classList.add('active_slider')

    sliderType()
}