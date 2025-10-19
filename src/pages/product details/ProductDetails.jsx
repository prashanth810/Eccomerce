import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallproducts } from '../../redux/Slices/ProductSlice';


const ProductDetails = () => {
    const dispatch = useDispatch();

    const { productloading, productdata, producterror } = useSelector((state) => state.products.product);

    useEffect(() => {
        dispatch(getallproducts());
    }, []);


    return (
        <section className='xl:w-[90%] mx-auto py-10'>
            <div className='grid grid-cols-5 gap-3'>
                {productdata?.slice(0, 5).map((product, i) => {
                    return (
                        <div key={i || product._id} className='border border-[#ccc]'>
                            <img
                                src={product.coverProfile}
                                alt={product.title}
                                className="w-full h-40 object-cover"
                            />
                            <p className='py-2 px-3'> {product.title} </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProductDetails
