import { animate } from "./helpers"

export const numbDrop = () => {
    const contactBlock = document.querySelector(".header-contacts")
    const accordion = document.querySelector('.header-contacts__phone-number-accord')
    const hideNumber = accordion.querySelector('a')

    let clicker = false

    const dropDown = (arrow) => {
        clicker = !clicker

        if(clicker){
            animate({
                duration: 100,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    arrow.style.transform = `rotate(${progress * 180}deg)`
                    accordion.style.position = 'static'
                    hideNumber.style.opacity = `${progress * 1}`
                },
            });
        }else{
            animate({
                duration: 100,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    arrow.style.transform = `rotate(${180 - progress * 180}deg)`
                    hideNumber.style.opacity = `${1 - progress * 1}`
                   
                    if(hideNumber.style.opacity === '0'){
                        accordion.style.position = 'absolute'
                    }
                },
            });
        }
    }

    contactBlock.addEventListener('click', (e) => {
        if(e.target.localName === 'img'){
            dropDown(e.target)
        }
    })
}