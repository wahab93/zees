import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { delFav } from '../redux/action'

export const Navbar = () => {
    const state = useSelector((state) => state.carthandler)
    const stateuser = useSelector((state) => state.userinfihandler.user)
    const favproduct = useSelector((state) => state.favhandler)
    const dispatch = useDispatch()
    const navigatation = useNavigate();
    const logOut = (() => {
        dispatch({
            type: 'LOGOUT'
        })
        localStorage.removeItem('loginUser');
        navigatation('/login')
    })
    const handleDel = (e) => {
        dispatch(delFav(e))
    }

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
                                <Link className="nav-link" to='/'>Home</Link>
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
                            <Link className='heart'>
                                {favproduct.length != 0 ?
                                    <i className='fas fa-heart position-relative' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"></i>
                                    :
                                    <i className='fa-regular fa-heart position-relative' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"></i>
                                }
                                {favproduct.length != 0 ? <span> {favproduct.length}</span> : ''}
                            </Link>
                            {
                                stateuser ?
                                    <a href='#' className="cart mx-3" onClick={logOut}>
                                        <i className="fa fa-sign-out"></i>
                                    </a>
                                    :
                                    <Link to="/login" className="cart mx-3">
                                        <i className="fa fa-user"></i>
                                    </Link>
                            }
                            <Link to="/cart" className='cart shpcart'>
                                <i className="fa fa-shopping-cart"></i>
                                {state.length != 0 ? <span>{state.length}</span> : ''}
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Favorite Products</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {
                        favproduct.length == 0 ?
                            <h3>No Products</h3>
                            :
                            (
                                <>
                                    <span className='mb-3'><b>Total Favorite Product</b> :{favproduct.length}</span>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                favproduct.map((e, i) => {
                                                    return (
                                                        <>
                                                            <tr key={i}>
                                                                <th scope="row">{e.title}</th>
                                                                <td>{e.price}</td>
                                                                <td>
                                                                    <Link className='' onClick={() => handleDel(e)}>
                                                                        <i className='fas fa-trash-alt text-danger'></i>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </>
                            )
                    }
                </div>
            </div>
        </>
    )
}
