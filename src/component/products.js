import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ProductCard } from './productCard'
import { useDispatch } from 'react-redux'
import { addCart, addFav, removeFav } from '../redux/action'

export const Products = () => {
    const [data, setdata] = useState([])
    const [productcat, setProductcat] = useState([])
    const [productdata, setProductdata] = useState([])
    const state = useSelector((state) => state.carthandler)
    const favproduct = useSelector((state) => state.favhandler)
    const dispatch = useDispatch()

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
    // checl if product is already in cart
    const isProductInCart = (id) => {
        if (state.length === 0) {
            return false;
        }
        return state.some((e) => e.id === id);
    };

    // add product in card and dispatch
    const addProduct = (product) => {
        dispatch(addCart(product));
    };
    // add product in card and dispatch
    const addProductFav = (product) => {
        const isFavorite = isFavProductInCart(product.id);

        if (isFavorite) {
            // Product is already in favorites, remove it
            dispatch(removeFav(product));
        } else {
            // Product is not in favorites, add it
            dispatch(addFav(product));
        }
    };
    // checl if product is already in cart
    const isFavProductInCart = (id) => {
        if (favproduct.length === 0) {
            return false;
        }
        return favproduct.some((e) => e.id === id);
    };

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
                        productdata.map((product) => {
                            const { id } = product;
                            const productIsInCart = isProductInCart(id);
                            const favProductIsInCart = isFavProductInCart(id);
                            return (
                                <>
                                    <ProductCard key={product.id} favProductIsInCart={favProductIsInCart} addProductFav={addProductFav} addProduct={addProduct} product={product} productIsInCart={productIsInCart} />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}