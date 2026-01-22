import React from 'react';
import like from '../../assets/like.png';

const ExploreArtCard = ({artwork}) => {
    return (
        <div className='rounded-2xl p-2'>
            <div className="card bg-base-100 w-full shadow-sm">
                <div>
                    <img
                    src={artwork.image}
                    alt=""/>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{artwork.title}</h2>
                    <p>{artwork.artistName}</p>
                    <p>Category:  {artwork.category}</p>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <button><img className='w-5 h-5' src={like} alt="" /></button>
                        <p>{artwork.likesCount}</p>
                    </div>
                    <div className="card-actions justify-end">
                    <button className="my-btn my-btn:hover btn btn-primary mx-auto">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreArtCard;