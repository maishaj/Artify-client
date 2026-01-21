import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <header>
               <Navbar></Navbar>
            </header>
            <main>
                <Slider></Slider>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;