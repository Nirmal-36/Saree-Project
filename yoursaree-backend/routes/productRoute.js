import express from "express"
import { listProducts, addProduct, removeProduct, singleProduct } from "../controllers/productController.js"
import { productUpload } from "../middleware/multer.js"
import adminAuth from "../middleware/adminAuth.js"

const productRouter = express.Router()

productRouter.post('/add', adminAuth, productUpload, addProduct)
productRouter.post('/remove', adminAuth, removeProduct)
productRouter.post('/single', singleProduct)
productRouter.get('/list', listProducts)

export default productRouter
