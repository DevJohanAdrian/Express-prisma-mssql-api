import { Router } from "express";
import { saveCategory } from "../controller/category.controller.js";


const router = Router();

//GET
router.get('/category', (req, resp) => {
    resp.send('obteniendo cateoria');
})

//POST 
router.post('/category', saveCategory)


export default router;