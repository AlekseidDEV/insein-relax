export const sliderType = () => {
    const sliderWrapper = document.querySelector('.repair-types-slider-wrap')
    const activeSlider = document.querySelector('.active_slider')
    const slides = activeSlider.querySelectorAll('div')
    
    const slideCount = sliderWrapper.querySelector(".slider-counter-content__current")
    const slideTotal = sliderWrapper.querySelector(".slider-counter-content__total")

    let count = 0

    slideCount.textContent = count + 1
    slideTotal.textContent = slides.length

    const prevSlide = () => {
         const activeSlide = activeSlider.querySelector('.active-slide-repair')

        count--

        if(count < 0){
            count = slides.length - 1
        }

        slideCount.textContent = count + 1

        activeSlide.classList.remove('active-slide-repair')
        slides[count].classList.add('active-slide-repair')
    }

    const nextSlide = () => {
        const activeSlide = activeSlider.querySelector('.active-slide-repair')

        count++
        
        if(count > slides.length - 1){
            count = 0
        }

        slideCount.textContent = count + 1

        activeSlide.classList.remove('active-slide-repair')
        slides[count].classList.add('active-slide-repair')
    }


    sliderWrapper.addEventListener('click', (e) => {
         if(e.target.closest('#repair-types-arrow_left')){
                prevSlide()
        } else if(e.target.closest('#repair-types-arrow_right')){
                nextSlide()
        }
    })
}