import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { delFav } from '../redux/action'
import { Topbar } from './topbar'
import { FavProductOffCanvas } from './favProductOffCanvas'

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
            <Topbar />
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
                                {favproduct.length !== 0 ? <span> {favproduct.length > 9 ? '9+' : favproduct.length}</span> : ''}
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
                                {state.length !== 0 ? <span>{state.length > 9 ? '9+' : state.length}</span> : ''}
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <FavProductOffCanvas favproduct={favproduct} handleDel={handleDel} />
        </>
    )
}
