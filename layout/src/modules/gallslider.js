export const gallSlider = () => {
    const popupPortfolio = document.querySelector('.popup-portfolio')
    const contTextPopup = document.querySelectorAll('.popup-portfolio-text')
    const slides = document.querySelectorAll('.popup-portfolio-slider__slide')

    const slideCount = popupPortfolio.querySelector(".slider-counter-content__current")
    const slideTotal = popupPortfolio.querySelector(".slider-counter-content__total")

    let count = 0

    popupPortfolio.style.visibility = 'visible'

    slideCount.textContent = 1
    slideTotal.textContent = slides.length

    const nextSlide = () => {
        const activeSlide = document.querySelector('.active_slide_portfolio')
        const activeDesc = document.querySelector('.active-portfolio-text')

        count++

        if(count >= slides.length){
            count = 0
        }

        slideCount.textContent = count + 1

        activeSlide.classList.remove('active_slide_portfolio')
        slides[count].classList.add('active_slide_portfolio')

        activeDesc.classList.remove('active-portfolio-text')
        contTextPopup[count].classList.add('active-portfolio-text')
    }


    const prevSlide = () => {
        const activeSlide = document.querySelector('.active_slide_portfolio')
        const activeDesc = document.querySelector('.active-portfolio-text')

        count--

        if(count < 0){
            count = slides.length - 1
        }

        slideCount.textContent = count + 1

        activeSlide.classList.remove('active_slide_portfolio')
        slides[count].classList.add('active_slide_portfolio')

        activeDesc.classList.remove('active-portfolio-text')
        contTextPopup[count].classList.add('active-portfolio-text')
    }


    popupPortfolio.addEventListener('click', (e) => {
        if(e.target === popupPortfolio || e.target.closest('.close')){
            popupPortfolio.style.visibility = 'hidden'
        } else if(e.target.closest('#popup_portfolio_left')){
            prevSlide()
        } else if(e.target.closest('#popup_portfolio_right')){
            nextSlide()
        }
    })
}