import React from 'react';

const TopArtistCard = ({artist}) => {

    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm h-full">
                <div>
                    <img className="w-full h-full object-cover"
                    src={artist.photo}
                    alt=""/>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold">{artist.name}</h2>
                    <p><span className='font-semibold'>Artworks:</span> {artist.totalArtworks}</p>
                    <p><span className='font-semibold'>Featured Artwork:</span><br></br>{artist.featuredArtworks[0].title}</p>
                    <div className="card-actions justify-end">
                    {/* <button className="my-btn my-btn:hover btn btn-primary mx-auto">View Details</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopArtistCard;