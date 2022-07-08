import express from 'express';
import bodyParser from 'body-parser'
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.use(bodyParser.json());

//@desc fetch all products
//@route Get /api/products
//@access Public
router.get('/', asyncHandler( async (req, res) => {
    const products = await Product.find({})
        
            res.send(products)
        
    }
))

//@desc fetch single products
//@route Get /api/products/:id
//@access Public
router.get('/:id', asyncHandler( async (req, res) => {
  
    const product = await Product.findById(req.params.id)
        if(!product) {
            res.status(404)
            throw new Error('Product not found')
        } else {
            res.json(product)
        }
    })
)


export default router;