export const privacyLink = (classPopup) => {
    const popupPrivacy = document.querySelector(classPopup)


    popupPrivacy.style.visibility = 'visible'
    
    popupPrivacy.addEventListener("click", (e) => {
        if(e.target === popupPrivacy){
            popupPrivacy.style.visibility = 'hidden'
        }
    })
}