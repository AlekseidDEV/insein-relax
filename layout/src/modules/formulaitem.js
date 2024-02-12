export const formulaItem = () => {
    const wrapperFormulaBlock = document.querySelector('#formula')

    const positionIcon = (target, classItem) => {
        const clientItem = target.querySelector(classItem)
        const rect = clientItem.getBoundingClientRect()

        if(rect.y < 0){
            clientItem.style.bottom = `-${clientItem.clientHeight + 20}px`
            clientItem.classList.add('problems-item__icon_c')
        }
    }

    const visibleIcon = (target, visible, opacity, indexVisible = '') => {
        const iconPopup = target.querySelector('.formula-item-popup')

        iconPopup.style.visibility = visible
        iconPopup.style.opacity = opacity
        
        if(indexVisible !== ''){
            iconPopup.style = {}
            iconPopup.classList.remove('problems-item__icon_c')
        }
    }

    wrapperFormulaBlock.addEventListener('mouseover', (e) => {
       if(e.target.closest('.formula-item__icon')){
            positionIcon(e.target.closest('.formula-item__icon'), ".formula-item-popup" )
            visibleIcon(e.target.closest('.formula-item__icon'), 'visible', 1)
       }
    })

    wrapperFormulaBlock.addEventListener('mouseout', (e) => {
        if(e.target.closest('.formula-item__icon')){
             visibleIcon(e.target.closest('.formula-item__icon'), 'hidden', 0, 1)
        }
     })
}