import React, { use } from 'react';
import TopArtistCard from '../TopArtistCard/TopArtistCard';

const TopArtists = ({artistPromise}) => {

    const artists=use(artistPromise);

    return (
         <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-semibold text-center m-20'>Top Artists of the week</h1>
            <div className='grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-4'>
                {
                 artists.map(artist=><TopArtistCard key={artist._id} artist={artist}></TopArtistCard>)
                }
            </div>
        </div>
    );
};

export default TopArtists;