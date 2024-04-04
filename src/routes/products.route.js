import { Router } from "express";
import { deleteProductById, deleteProducts, getProductById, getProducts, saveProducts, updateProduct } from "../controller/products.controller.js";


const router = Router();

//GET
router.get('/products', getProducts)

//GET BY ID
router.get('/products/:id', getProductById)

//POST
router.post('/products', saveProducts)

//PUT
router.put('/products/:id', updateProduct)

//DELETE BY ID
router.delete('/products/:id', deleteProductById)

//DELETE 
router.delete('/products', deleteProducts)


export default router;