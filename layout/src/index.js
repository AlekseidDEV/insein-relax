import { btnUpFunc } from "./modules/btnup";
import { numbDrop } from "./modules/numberdrop";
import { popupMenu } from "./modules/popupmenu";




numbDrop()
if(window.innerWidth > 576){
    popupMenu('right', 639)
} else if(window.innerWidth <= 576){
    popupMenu('top', 735)
}
btnUpFunc()

