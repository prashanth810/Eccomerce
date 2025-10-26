import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom';
import { handlefetchsingleproduct } from '../../redux/Slices/ProductSlice';
import { FaAngleRight } from "react-icons/fa6";

const Singleproduct = () => {
    const { id } = useParams();

    const [selectedImage, setSelectedImage] = useState('')

    const dispatch = useDispatch();
    const { singleproductloading, singleproduct, singleproducterror } = useSelector((state) => state.products.singleprod);

    useEffect(() => {
        dispatch(handlefetchsingleproduct(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (singleproduct?.coverProfile) {
            setSelectedImage(singleproduct.coverProfile)
        }
    }, [singleproduct]);


    return (
        <section className='max-w-7xl mx-auto pt-10'>
            <div className='flex gap-10'>
                <div>
                    <img src={selectedImage} alt='main image' className='w-[30rem] h-96 object-cover' />

                    <div className="flex items-center gap-x-2 mt-2">

                        {singleproduct?.images?.map((img, i) => (
                            <div key={i} onClick={() => setSelectedImage(img)} className='cursor-pointer'>
                                <img src={img} alt={`Product ${i}`} className="w-28 h-28 object-cover" />
                            </div>
                        ))}

                        <div onClick={() => setSelectedImage(singleproduct.coverProfile)} className='cursor-pointer'>
                            <img src={singleproduct.coverProfile} alt='main image' className='w-30 h-28 object-cover' />
                        </div>

                    </div>
                </div>

                <div>
                    <div className='flex items-center gap-1 text-gray-500 text-sm pb-3'>
                        <NavLink to={'/'} className='flex items-center gap-1 hover:text-green-400 duration-300 transition'> Home <FaAngleRight /> </NavLink>
                        <p className='flex items-center gap-1 hover:text-green-400 duration-300 transition cursor-pointer'> Categories <FaAngleRight /> </p>
                        <p className='flex items-center gap-1 hover:text-green-400 duration-300 transition cursor-pointer'> Products <FaAngleRight /> </p> </div>

                    <h2 className='text-3xl'> {singleproduct.title} </h2>
                </div>
            </div>

        </section>
    )
}

export default Singleproduct
