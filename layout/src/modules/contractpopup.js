export const contarctSlider = () => {
    const popupTrasparency = document.querySelector('.popup-transparency')
    const slides = popupTrasparency.querySelectorAll('.popup-transparency-slider__slide')

    const slideCount = popupTrasparency.querySelector(".slider-counter-content__current")
    const slideTotal = popupTrasparency.querySelector(".slider-counter-content__total")

    let count = 0

    popupTrasparency.style.visibility = 'visible'
    slideCount.textContent = 1
    slideTotal.textContent = slides.length

    const nextDocum = () => {
        const activeDocs = popupTrasparency.querySelector('.active_transparancy')

        count++

        if(count >= slides.length){
            count = 0
        }

        slideCount.textContent = count + 1

        activeDocs.classList.remove('active_transparancy')
        slides[count].classList.add('active_transparancy')
    }

    const prevDocum = () => {
        const activeDocs = popupTrasparency.querySelector('.active_transparancy')

        count--

        if(count < 0){
            count = slides.length - 1
        }

        slideCount.textContent = count + 1

        activeDocs.classList.remove('active_transparancy')
        slides[count].classList.add('active_transparancy')
    }


    popupTrasparency.addEventListener("click", (e) => {
        if(e.target === popupTrasparency || e.target.closest('.close')){
            popupTrasparency.style.visibility = 'hidden'
        } else if(e.target.closest('#transparency_left')){
            prevDocum()
        } else if(e.target.closest('#transparency_right')){
            nextDocum()
        }
    })
}