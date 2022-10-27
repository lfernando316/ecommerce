import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../utils/getConfig'
import SliderImgs from './SliderImgs'
import './styles/producInfo.css'

const ProductInfo = ({ product }) => {

    const [counter, setCounter] = useState(1)

    const handleminus = () => {
        if (counter - 1 > 0) {
            setCounter(counter - 1)
        }
    }

    const handlePLus = () => {
        setCounter(counter + 1)
    }

    const handleAddCart = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const data = {
            id: product.id,
            quantity: counter
        }
        axios.post(URL, data, getConfig())
            .then(res => console.log(res.data))
            .catch(errb => console.log(err))

    }

    return (
        <article className='product-info'>
            <h2 className='product-info__title'>{product?.title}</h2>
            <p className='product-info__description'>{product?.description}</p>
            <footer className='product-info__footer'>
                <div className='product-info__price-container'>
                    <h3 className='product-info__price-label'>Price</h3>
                    <span className='product-info__price-number'>{product?.price}</span>
                </div>
                <div className='product-info__quantity-container'>
                    <h3 className='product-info__quantity-label'>Quantity</h3>
                    <div className='counter'>
                        <button onClick={handleminus} className='counter__minus'>-</button>
                        <div className='counter__number'>{counter}</div>
                        <button onClick={handlePLus} className='counter__plus'>+</button>
                    </div>
                </div>
                <button onClick={handleAddCart} className='product-info__btn'>Add to Cart <i className="product-info__icon bi bi-cart4"></i></button>
            </footer>
        </article>
    )
}

export default ProductInfo