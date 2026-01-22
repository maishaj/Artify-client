import React, { use } from 'react';
import ArtWorkCard from '../ArtworkCard/ArtWorkCard';

const FeaturedArtwork = ({artworkPromise}) => {

    const artworks = use(artworkPromise);

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-semibold text-center m-20'>Featured Artwork</h1>
            <div className='grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-4'>
                {
                 artworks.map(artwork=><ArtWorkCard key={artwork._id} artwork={artwork}></ArtWorkCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedArtwork;