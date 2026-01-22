import React, { Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ArtworkDetails from '../components/ArtworkDetails/ArtworkDetails';

const ArtworkDetailsLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
                <Suspense>
                    <ArtworkDetails></ArtworkDetails>
                </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default ArtworkDetailsLayout;