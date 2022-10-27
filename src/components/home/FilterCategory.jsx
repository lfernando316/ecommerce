import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'


const FilterCategory = () => {

    const [categories, setCategries] = useState()

    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
        axios.get(URL)
            .then(res => setCategries(res.data.data.categories))
            .catch(err => console.log(err))


    }, [])

    const dispatch = useDispatch()

    const handleFetchCategory = id => {
        console.log(id)
        if (id) {
            dispatch(getProductsByCategory(id))
        } else {
            dispatch(getAllProducts())
        }
    }


    return (
        <article>
            <h3>Category</h3>
            <ul>
                <li onClick={() => handleFetchCategory()}>All products</li>
                {
                    categories?.map(category => (
                        <li onClick={() => handleFetchCategory(category.id)} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>
        </article>
    )
}

export default FilterCategory

