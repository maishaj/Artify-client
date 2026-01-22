import React, { Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';
import FeaturedArtwork from '../components/FeaturedArtwork/FeaturedArtwork';
import TopArtists from '../components/TopArtists/TopArtists';

const Home = () => {

    const artworkPromise=fetch('http://localhost:3000/artwork').then(res=>res.json());
    const artistPromise=fetch('http://localhost:3000/artists').then(res=>res.json());

    return (
        <div>
            <header>
               <Navbar></Navbar>
            </header>
            <main>
                <Slider></Slider>
                <Suspense>
                    <FeaturedArtwork artworkPromise={artworkPromise}></FeaturedArtwork>
                    <TopArtists artistPromise={artistPromise}></TopArtists>
                </Suspense>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;