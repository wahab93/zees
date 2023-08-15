import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action'

export const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product) => {
        debugger
        dispatch(addCart(product))
        setToggle(true)
    }

    useEffect(() => {
        const getproduct = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await res.json())
        }
        getproduct()
    }, [])
    return (
        <>
            <div className="container py-5 singleproduct">
                <div className="row py-4">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <img src={product.image} alt={product.title}
                            className='img-fluid'/>
                    </div>
                    <div className="col-md-6">
                        <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                        <h1 className='display-6'> {product.title} </h1>
                        <p className='lead'>
                            Rating {product.rating && product.rating.rate}
                            <i className='fa fa-star ms-2'></i>
                        </p>
                        <h3 className='display-6 fw-bold my-4'> ${product.price} </h3>
                        <p className="lead"> {product.description} </p>
                        <div className='d-flex justify-content-start'>
                            {
                                toggle ? <Link className="primary-btn w-25 ms-2" to='/cart'>Go to Cart</Link>
                                    :
                                    <Link className="bordered-primary-btn w-25 mx-0" onClick={() => addProduct(product)}>Add to Cart</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
