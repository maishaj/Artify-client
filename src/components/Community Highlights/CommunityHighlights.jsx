import React from 'react';
import starImg from '../../assets/starIcon.png'

const CommunityHighlights = () => {
    return (
        <div className='w-11/12 mx-auto m-20'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-semibold text-center'>Community Highlights</h1>
                <p className='text-center m-10'>At Artify, we connect artists and art lovers in one creative space. From emerging talent to timeless masterpieces, our platform brings the world of art closer to you. Hear from our community why Artify is their favorite place for inspiration and creativity.</p>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row gap-6'>
                <div className='w-full md:w-1/4 lg:w-1/5 mx-auto space-y-8 p-7 shadow-2xl text-center'>
                    <p>Artify has completely transformed how I discover and connect with artists. The platform is intuitive, and the support team is incredibly helpful. Highly recommended!</p>
                    <hr />
                    <p>Dimitrof Shamoun</p>
                    <div className='flex flex-row justify-center'>
                        <img src={starImg} alt="" />
                        <img src={starImg} alt="" />
                        <img src={starImg} alt="" />
                        <img src={starImg} alt="" />
                    </div>
                </div>
                 <div className='w-full md:w-1/4 lg:w-1/5 mx-auto space-y-8 p-7 shadow-2xl text-center'>
                    <p>I was amazed by the quality of artworks and the vibrant community on Artify. Every artist I’ve interacted with has been inspiring. Excellent experience!</p>
                    <hr />
                    <p>Dimitriv Shamoun</p>
                    <div className='flex flex-row justify-center'>
                        <img src={starImg} alt="" />
                        <img src={starImg} alt="" />
                        <img src={starImg} alt="" />
                        <img src={starImg} alt="" />
                    </div>
                </div>
                 <div className='w-full md:w-1/4 lg:w-1/5 mx-auto space-y-8 p-7 shadow-2xl text-center'>
                    <p>Using Artify has been a pleasure! The website is smooth, the artwork collection is fantastic, and the team is always ready to help. Truly a 5-star platform!</p>
                    <hr />
                    <p>Alex Shamoun</p>
                    <div className='flex flex-row justify-center'>
                        <img src={starImg} alt="" />
                        <img src={starImg} alt="" />
                        <img src={starImg} alt="" />
                        <img src={starImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityHighlights;