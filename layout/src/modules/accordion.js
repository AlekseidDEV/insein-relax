export const accordModule = () => {
    const accordion = document.querySelector('.accordion')

    accordion.addEventListener('click', (e) => {
        if(e.target.matches(".title_block")){
            e.target.classList.toggle('msg-active')
        }
    })
}