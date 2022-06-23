import React from 'react';
import { Link, match, useParams } from 'react-router-dom';
import Rating from '../Rating/Rating';
import products from '../Product/products'
import './ProductDetails.css'

const ProductDetails = () => {
  let { id } = useParams();
  const product = products.find((p) => p._id === id)

  return (
    <main>
      <div className='details'>
        <div className='details1'><img src={product.image} alt={product.name} /></div>
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
          <div className="select b">
            Select Color
          </div>
          <div className="rated">
            <div className="stars">
              <Rating value={product.rating} />
            </div>
            <div className="ratingd">
              {product.numReviews} reviews
            </div>
          </div>
          <div className="extrad">
            <span className='price'>${product.price}</span>
            
          </div>
          <Link to='#'> <button>Add to cart</button> </Link>
          <Link to='#'> <button>Buy now</button> </Link>
        </div>
      </div>
    </main>
  )
}

export default ProductDetails