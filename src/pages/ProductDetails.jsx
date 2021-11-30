import React, {useState, useEffect} from 'react'
import {useParams, useNavigate, useSearchParams, useLocation} from 'react-router-dom'
import Product from '../components/Product';
import useQuery from '../hooks/useQuery';

function ProductDetails() {
    const {id} = useParams();
    const [searchParams] = useSearchParams()
    const {search} = useLocation()

    // логирование query параметров из url адреса запроса
    console.log('search from location: ', search)
    // перебор параметов запроса
    searchParams.forEach((param, value) => console.log('item param: ', param, value))

    const navigate = useNavigate()
    const [product] = useQuery({url:`https://fakestoreapi.com/products/${id}`})

    return (
        <div>
            <div onClick={() => navigate(-1)}>Back</div>
            {product ? <Product isShowLink={false} {...product}/> : <div>Loding</div>}
        </div>
    )
}

export default ProductDetails
