import React from 'react'
import Navbar from '../../layouts/navbar/Navbar'
import BannerSlider from './BannerSlider'
import ProductDetails from '../product details/ProductDetails'

const HomePage = () => {
    return (
        <section>
            <Navbar />
            <BannerSlider />
            <ProductDetails />
        </section>
    )
}

export default HomePage
