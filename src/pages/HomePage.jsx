import React, {useState, useEffect} from 'react'
import Product from '../components/Product';


function HomePage() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }, [])


    return (
        <div>
           {products 
            ? products.map(product => <Product key={product.id} {...product} />)
            : <div>Loading</div>
        }
        </div>
    )
}

export default HomePage
