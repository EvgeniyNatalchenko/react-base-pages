import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Product({
    isShowLink = true,
    title = '',
    category = '',
    description = '',
    id = 1,
    image = ''
}) {

    const location = useLocation()
    const isHideLink = !location.pathname.includes('product')
    
    return (
        <div>
            <img src={image} width={200} alt="" />
            <h4>{title}</h4>
            <h5>{category}</h5>
            <p>{description}</p>
            {isHideLink && <Link to={`product/${id}`} >More</Link>}
        </div>
    )
}

export default Product