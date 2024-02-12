import { btnUpFunc } from "./modules/btnup";
import { numbDrop } from "./modules/numberdrop";
import { popupMenu } from "./modules/popupmenu";
import { repairBlock} from "./modules/repairblock";
import { sendForm } from "./modules/sendForm";
import { maskPhone } from "./modules/helpers";
import { privacyLink } from "./modules/privacylink";
import { sliderType } from "./modules/slidertype";
import { formulaItem } from "./modules/formulaitem";
import { portSlider } from "./modules/portfolioslider";

numbDrop()
if(window.innerWidth > 576){
    popupMenu('right', 639)
} else if(window.innerWidth <= 576){
    popupMenu('top', 735)
}
btnUpFunc()
repairBlock()

document.addEventListener('submit', (e) => {
    e.preventDefault()

    sendForm(e.target)
})

document.addEventListener('click', (e) => {
    if(e.target.className === 'link-privacy'){
        privacyLink('.popup-privacy')
    }
})
sliderType()
formulaItem()
portSlider()

maskPhone('input[name="phone"]')




