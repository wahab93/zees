import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export const Navbar = () => {
    debugger
    const state = useSelector((state) => state.carthandler)
    const stateuser = useSelector((state) => state.userinfihandler.user)
    const disaptch = useDispatch()
    const navigatation = useNavigate();

    useEffect(() => {
        const payload = localStorage.getItem('loginUser')
        if (payload) {
            disaptch({
                type: 'LOGIN',
                payload
            })
        }
    }, [])


    const logOut = (() => {
        disaptch({
            type: 'LOGOUT'
        })
        localStorage.removeItem('loginUser');
        navigatation('/login')
    })

    return (
        <>
            <div className="container-fluid header_top py-2">
                <div className="row">
                    <div className="col-md-6">
                        <p className='m-0'>Delivery WorldWide</p>
                    </div>
                    <div className="col-md-6">
                        <ul className="ps-0">
                            <li>
                                <a href="tel:021 111-116-257">
                                    <i className="fa fa-phone me-2"></i>
                                    021 111-116-257
                                </a>
                            </li>
                            <li className='mx-md-3'>
                                <a href="https://wa.me/+9203400006257" target="_blank">
                                    <i className="fa fa-whatsapp me-2"></i>
                                    0340 0006257
                                </a>
                            </li>
                            <li>
                                <a href="mailto:support@oaks.pk">
                                    <i className="fa fa-envelope me-2"></i>
                                    support@oaks.pk
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>ZEES</Link>
                    <div>
                        <Link to="/cart" className='cart ms-2 d-none position-relative'>
                            <i className="fa fa-shopping-cart"></i>
                            <span>{state.length}</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/aboutus'>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/products'>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contactus'>Contact Us</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            {
                                stateuser ?
                                    <Link className="cart" onClick={logOut}>
                                        <i className="fa fa-sign-out"></i>
                                    </Link>
                                    :
                                    <Link to="/login" className="cart">
                                        <i className="fa fa-user"></i>
                                    </Link>
                            }
                            <Link to="/cart" className='cart ms-2 shpcart'>
                                <i className="fa fa-shopping-cart"></i>
                                <span>{state.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
