import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ product, productIsInCart, addProduct, addProductFav, favProductIsInCart }) => {
    return (
        <div className="col-md-3 col-6 designcard">
            {favProductIsInCart ?
                <i className='fas fa-heart' onClick={() => addProductFav(product)}></i> :
                <i className='fa-regular fa-heart' onClick={() => addProductFav(product)}></i>
            }
            <div className="card h-100 text-center p-md-4">
                <Link to={`/products/${product.id}`}>
                    <img src={product.image} className="card-img-top" height='200px' alt={product.title} />
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <p className="card-text fw-bold">{product.title.substring(0, 12)}</p>
                            <p className="card-text fw-bold">${product.price}</p>
                        </div>
                        {productIsInCart ?
                            <Link className="bordered-primary-btn added me-0" to='/cart'>Go to Cart</Link> :
                            <Link onClick={() => addProduct(product)} className="primary-btn">Buy Now</Link>
                        }
                    </div>
                </Link>
            </div>
        </div>
    )
}
