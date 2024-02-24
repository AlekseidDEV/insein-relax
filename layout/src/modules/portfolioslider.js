import { gallSlider } from "./gallslider"
import { animate } from "./helpers"

export const portSlider = () => {
    const portfolioBlock = document.querySelector('#portfolio')
    const wrapperSlides = document.querySelector('.wrapper-port_slider')
    const overflowContainer = document.querySelector('.portfolio-slider')
    const rigthArrow = document.getElementById('portfolio-arrow_right')
    const lefthArrow = document.getElementById('portfolio-arrow_left')

    let curentTranslate = 0
    let prevTranslate = 0

    const innerVisibSlides = () => {
        const allSlides = document.querySelectorAll('.portfolio-slider__slide')

        allSlides.forEach((slide) => {
            const rect = slide.getBoundingClientRect()

            if(rect.x > overflowContainer.clientWidth + 4){
                slide.classList.add('fade-tab_next')
            } else if(rect.x > 0 && rect.x <= overflowContainer.clientWidth + 4){
                slide.classList.remove('fade-tab_next')
                slide.classList.remove('fade-tab_prev')
            } else if(rect.x < 0){
                slide.classList.add('fade-tab_prev')
            }
        })
    }

    const fadePrev = () => {
        const fadeSlides = document.querySelectorAll('.fade-tab_prev')
        const currentWidth = fadeSlides[0].clientWidth

        prevTranslate -= +currentWidth
        
        animate({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                overflowContainer.style.transform = `translate3d(-${currentWidth + (prevTranslate - currentWidth * progress)}px, 0px, 0px)`
                
                if(progress === 1){
                    innerVisibSlides()
                }
            },
        });

        if(fadeSlides.length === 1){
            rigthArrow.style.display = 'flex'
            lefthArrow.style.display = 'none'
        }
        
        curentTranslate = 0
    }

    const fadeNext = () => {
        const fadeSlides = document.querySelectorAll('.fade-tab_next')
        const currentWidth = fadeSlides[0].clientWidth

        curentTranslate += +currentWidth

        animate({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                overflowContainer.style.transform = `translate3d(-${(curentTranslate + currentWidth * progress) - currentWidth}px, 0px, 0px)`
                
                if(progress === 1){
                    innerVisibSlides()
                }
            },
        });

        if(fadeSlides.length === 1){
            rigthArrow.style.display = 'none'
            lefthArrow.style.display = 'flex'
        }

        prevTranslate = curentTranslate
    }

    innerVisibSlides()

    portfolioBlock.addEventListener('click', (e) => {
        if(e.target.className === 'portfolio-slider__slide-frame'){
            gallSlider()
        } else if(e.target.closest('#portfolio-arrow_right')){
            fadeNext()
        } else if(e.target.closest('#portfolio-arrow_left')){
            fadePrev()
        }
    })
}