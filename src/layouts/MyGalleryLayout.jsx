import React, { Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import MyGallery from '../components/MyGallery/MyGallery';

const MyGalleryLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
                <Suspense>
                    <MyGallery></MyGallery>
                </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default MyGalleryLayout;