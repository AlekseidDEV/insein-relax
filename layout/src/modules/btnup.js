import { smoothScroll } from "./smoothscroll"
export const btnUpFunc = () => {
    const btnUp = document.querySelector('.button-footer')

    btnUp.addEventListener('click', (e) => {
        e.preventDefault()
        
        smoothScroll(e.target.hash.slice(1))
    })
}