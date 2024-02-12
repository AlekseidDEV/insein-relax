import { gallSlider } from "./gallslider"
import { animate } from "./helpers"

export const portSlider = () => {
    const portfolioBlock = document.querySelector('#portfolio')
    const wrapperSlides = document.querySelector('.wrapper-port_slider')
    const overflowContainer = document.querySelector('.portfolio-slider')
    const allSlides = document.querySelectorAll('.portfolio-slider__slide')

    let prevTranslate = 0
    let initTrans = 0

    const innerVisibSlides = () => {
        allSlides.forEach((slide) => {
            const rect = slide.getBoundingClientRect()

            if(rect.x > wrapperSlides.clientWidth + 5){
                slide.classList.add('fade-tab_next')
            } else if(rect.x < 0){
                console.log(slide);
            }
        })
    }


    const fadeNext = () => {
        const fadeSlides = document.querySelectorAll('.fade-tab_next')
         

        // animate({
        //     duration: 200,
        //     timing(timeFraction) {
        //         return timeFraction;
        //     },
        //     draw(progress){
         
        //     },
        // });
        // *TODO: продумать как сделать переключение слайдера
    }


    innerVisibSlides()

    portfolioBlock.addEventListener('click', (e) => {
        if(e.target.className === 'portfolio-slider__slide-frame'){
            gallSlider()
        } else if(e.target.closest('#portfolio-arrow_right')){
            fadeNext()
        }
    })
}