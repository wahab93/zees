import React from 'react'
import { Link } from 'react-router-dom'

export const FavProductOffCanvas = ({ favproduct, handleDel }) => {
    return (
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
                                                            <th scope="row">{e.title.substring(0, 25)}</th>
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
    )
}
