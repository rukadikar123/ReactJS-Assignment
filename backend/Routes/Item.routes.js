import { addItem, getAllItems} from "../Controllers/Item.controller.js";
import {Router} from 'express';
import { upload } from "../Middlewares/multer.js";

const router=Router()

router.post('/add',upload.fields([
    { name:"coverImage",maxCount:1},
    { name:"additionalImages",maxCount:5},
]), addItem)
router.get('/all',getAllItems)


export default router