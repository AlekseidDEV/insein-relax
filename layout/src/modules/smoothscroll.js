export const smoothScroll = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth', 
            block: 'start'
        })
}