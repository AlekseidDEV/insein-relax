export const reviewSlider = () => {
    const sliderWrapper = document.querySelector('.reviews-slider-wrap')
    const slides = document.querySelectorAll('.reviews-slider__slide')

    let count = 0

    const prevSlide = () => {
        const activeSlide = document.querySelector('.active_review_slide')

        count--

        if(count < 0){
            count = slides.length - 1
        }

        activeSlide.classList.remove('active_review_slide')
        slides[count].classList.add('active_review_slide')
    }

    const nextSlide = () => {
        const activeSlide = document.querySelector('.active_review_slide')

        count++

        if(count >= slides.length){
            count = 0
        }

        activeSlide.classList.remove('active_review_slide')
        slides[count].classList.add('active_review_slide')
    }

    sliderWrapper.addEventListener('click', (e) => {
       if(e.target.closest('#reviews-arrow_left')){
            prevSlide()
       } else if(e.target.closest('#reviews-arrow_right')){
            nextSlide()
       }
    })
}