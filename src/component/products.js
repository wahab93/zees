import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Products = () => {
    const [data, setdata] = useState([])
    const [productcat, setProductcat] = useState([])
    const [productdata, setProductdata] = useState([])
    const state = useSelector((state) => state.carthandler)
    // console.log(state);
    useEffect(() => {
        const getproducts = async () => {
            // getting the data from API
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();

            // find the duplicates and make them unique 
            const uniqlist = [...new Set(data.map((e) => {
                return e.category;
            })), 'ALL']
            setProductcat(uniqlist)
            // check if the filtered products array is empty then send all data to the product data
            if (productdata.length === 0) {
                setProductdata(data)
            }
            setdata(data)
        }
        getproducts();
    }, [])

    // Filter Products
    const filterProducts = (cat) => {
        if (cat === 'ALL') {
            return setProductdata(data)
        }
        const updateList = data.filter((e) => {
            return e.category === cat
        })
        setProductdata(updateList)
    }

    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <h1 className='text-center'>Latest Products</h1>
                    </div>
                </div>
                <div className="row g-3 justify-content-center">
                    <div className="buttons d-flex justify-content-center">
                        {/* Categories buttons */}
                        {
                            productcat.map((e, i) => {
                                return (
                                    <>
                                        <button className="btn btn-outline-dark me-2 text-capitalize" onClick={() => filterProducts(e)} key={i}>
                                            {e}
                                        </button>
                                    </>
                                )
                            })
                        }
                    </div>
                    {/* Products */}
                    {
                        productdata.map((e) => {
                            return (
                                <>
                                    <div className="col-md-3 col-6 designcard" key={e.id}>
                                        <div className="card h-100 text-center p-md-4">
                                            <img src={e.image} className="card-img-top" height='200px' alt={e.title} />
                                            <div className="card-body">
                                                <div className='d-flex justify-content-between'>
                                                    <p className="card-text fw-bold">{e.title.substring(0, 12)}</p>
                                                    <p className="card-text fw-bold">${e.price}</p>
                                                </div>
                                                <Link to={`/products/${e.id}`} className="primary-btn">Buy Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}