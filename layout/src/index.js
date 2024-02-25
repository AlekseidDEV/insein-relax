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
import { contarctSlider } from "./modules/contractpopup";
import { popupConsult } from "./modules/popupconsult";
import { reviewSlider } from "./modules/reviewslider";
import { accordModule } from "./modules/accordion";
import { repairModule } from "./modules/repairmodal";
import { userToken } from "./modules/usertoken";


userToken('notAuthorized')
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
    } else if(e.target.className === 'transparency-item__img'){
        contarctSlider()
    } else if(e.target.matches('.button_wide ')){
        popupConsult()
    }
})

sliderType()
formulaItem()
portSlider()
reviewSlider()
accordModule()
repairModule()


maskPhone('input[name="phone"]')




