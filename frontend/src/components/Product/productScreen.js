import React, { useEffect } from 'react';
import './productScreen.css'
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';
//import axios from 'axios';

const ProductScreen = () => {

    // const [products, listProducts] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        //const fetchProducts = async () => {
        //    const {data} = await axios.get('/api/products')

        //    listProducts(data)
        //}

        //fetchProducts()
        dispatch(listProducts())
    }, [dispatch])

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    return (
        <main>
            <h1 className='head'>Latest Products</h1>
            {loading
                ? <h2>Loading...</h2>
                : error
                    ? <h3>{error}</h3>
                    : <div className="ui items row center">
                        {products.map(product => (
                            <Product product={product} />
                        ))}
                    </div>
            }

        </main>
    );
}

export default ProductScreen;