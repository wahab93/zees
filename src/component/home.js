import React from 'react'
import { Products } from './products'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <div className='hero'>
                <div className="card bg-dark text-white border-0">
                    <img src="/images/banner.jpg" className="card-img rounded-0 img-fluid" alt="Banner image" />
                </div>
            </div>
            <div className="container py-5 maincontent">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center mb-5'>ZEES</h1>
                    </div>
                    <div className="col-md-6 mb-5">
                        <img src="/images/banner.jpg" alt="adsf" className='img-fluid' />
                    </div>
                    <div className="col-md-6 my-auto">
                        <h3 className='mb-3'>EXHIBITION CLOSING SOON</h3>
                        <p className='my-5'>
                            The Fondation Cartier pour l’art contemporain and The Shed present the North American debut of The Yanomami Struggle, a comprehensive exhibition dedicated to the collaboration between artist and activist Claudia Andujar and the Yanomami people, one of the largest Indigenous groups living in Amazonia today. On view through April 16, 2023.
                        </p>
                        <Link to='/aboutus' className='primary-btn w-25 ms-0'>Plan your visit</Link>
                    </div>
                </div>
            </div>
            <Products />
        </>
    )
}
