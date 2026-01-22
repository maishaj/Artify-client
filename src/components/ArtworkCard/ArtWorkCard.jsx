import React from 'react';

const ArtWorkCard = ({artwork}) => {

    return (
        <div>
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
                    <div className="card-actions justify-end">
                    <button className="my-btn my-btn:hover btn btn-primary mx-auto">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtWorkCard;