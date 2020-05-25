import{ Router} from 'https://deno.land/x/oak/mod.ts'
import {getProducts,addProduct,deleteProduct,updateProduct,getProduct} from './controllers/products.js'
// Creating route
const router = new Router()
router.get('/new/products',getProducts)
      .get('/new/product/:id',getProduct)
      .post('/new/product',addProduct)
      .put('/new/product/:id',updateProduct)
      .delete('new/product/:id',deleteProduct)

export default router