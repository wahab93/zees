import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delCart, addCart } from '../redux/action/index'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const state = useSelector((state) => state.carthandler)
    const dispatch = useDispatch()
    const handleclose = (e) => {
        dispatch(delCart(e))
    }
    const handleAdd = (e) => {
        dispatch(addCart(e))
    }
    const handleDel = (e) => {
        dispatch(delCart(e))
    }

    const cartItems = ((cartItems) => {
        const { id, image, title, price, qty } = cartItems
        return (
            <>
                <div className="col-md-6 productadded" key={id}>
                    <button className='btn-close float-end' onClick={() => handleclose(cartItems)}></button>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src={image} alt={title} width={'100px'} height={'200px'}  className='mt-5 mt-md-0' />
                        </div>
                        <div className="col-md-8">
                            <h4>{title.substring(0, 50)}</h4>
                            <p className='lead fw-bolder'> {qty} X {price} = ${(qty * price).toFixed(2)}</p>
                            <div className='d-flex counterbtn'>
                                <Link className='primary-btn ms-0 me-0' onClick={() => handleDel(cartItems)}>
                                    <i className='fa fa-minus'></i>
                                </Link>
                                <Link className='primary-btn ms-2' onClick={() => handleAdd(cartItems)}>
                                    <i className='fa fa-plus'></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    const emptyCart = () => {
        return (
            <>
                <div className="container py-5 my-5">
                    <div className="row">
                        <h1 className='text-center'>Your Cart is Empty</h1>
                        <Link to='/products' className="primary-btn mt-5" style={{width:'200px'}}>Go To Products</Link>
                    </div>
                </div>
            </>
        )
    }
    const buttons = () => {
        return (
            <>
                <div className="container py-5">
                    <div className="row">
                        <div className='col-md-4 d-flex mx-auto'>
                            <Link to='/checkout' className='primary-btn w-25'>CheckOut</Link>
                            <Link to='/products' className='primary-btn w-25'>Add More</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            {state.length == 0 && emptyCart()}
            <div className="container py-5">
                <div className="row g-4">
                    {state.length != 0 && state.map(cartItems)}
                </div>
            </div>
            {state.length != 0 && buttons()}
        </>
    )
}
