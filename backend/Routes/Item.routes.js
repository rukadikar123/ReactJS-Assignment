import { addItem} from "../Controllers/Item.controller.js";
import {Router} from express;

const router=Router()

router.post('/send',addItem)


export default router