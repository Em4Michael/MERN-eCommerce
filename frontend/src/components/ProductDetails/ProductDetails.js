import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../Rating/Rating';
import './ProductDetails.css'
import axios from 'axios';

const ProductDetails = () => {
  let { id } = useParams();
 // const product = products.find((p) => p._id === id)

  const [product, listProduct] = useState([])
    useEffect (() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${id}`)

            listProduct(data)
        }
        
        fetchProduct()
    }, [])

  
  return (
    <main>

      <div className='details'>
      
        <div className='details1'>
         
          <img src={product.image} alt={product.name} />
        </div>

        <div className='details2'>
          <div className="Title">
            {product.name}
          </div>
          <div className="BrandCategory">
            <div className="Brand">
              {product.brand}
            </div>
            <div className="Category">
              {product.category}
            </div>
          </div>
          <div className="description">
            {product.description}
          </div>

          <div className="rated top">
            <div className="stars">
              <Rating value={product.rating} />
            </div>
            <div className="ratingd">
              {product.numReviews} reviews
            </div>
          </div>
          <div className="extrad">
            <span className='price'>${product.price}</span>
            <span className='stock'>{product.countInStock > 0 ? <span className='Astock'>Available</span> : <span className='Ostock'>Out of Stock</span>}</span>
          </div>
          <Link to='#'> <button className='add top bt btn' >Add to cart</button> </Link>
          <Link to='#'>{product.countInStock > 0 ? <button className='buy top bt btn' >Buy now</button> : <button className='buy top bt btno' >Buy now</button>} </Link>
        </div>
      </div>
    </main>
  )
}

export default ProductDetails