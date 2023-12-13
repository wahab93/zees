import React from 'react'

export const Topbar = () => {
    return (
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
    )
}
