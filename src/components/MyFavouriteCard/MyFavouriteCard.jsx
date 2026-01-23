import React, { use, useState } from 'react';
import like from '../../assets/like.png';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

const MyFavouriteCard = ({artwork,onRemove}) => {

    const {user}=use(AuthContext);

    const handleRemoveFav=()=>{
        console.log("hello remove")
        fetch(`http://localhost:3000/favourites/${artwork._id}?userEmail=${user.email}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount)
            {
                toast.success("Content is removed successfully from your favourites!");
                onRemove(artwork._id);
            }
        })
    }

    return (
        <div>
            <div className='rounded-2xl p-2'>
                <div className="card bg-base-100 w-full h-full shadow-sm">
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
                        <Link to={`/artworkDetails/${artwork._id}`} className="my-btn my-btn:hover btn btn-primary mx-auto">Details</Link>
                        <button onClick={handleRemoveFav} className="my-btn my-btn:hover btn btn-primary mx-auto">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyFavouriteCard;