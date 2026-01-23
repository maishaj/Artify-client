import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import favImg from '../../assets/like.png';
import likeImg from '../../assets/realLike.png';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext';

const ArtworkDetails = () => {

    const artwork=useLoaderData();
    const {user}=use(AuthContext);

    const [like,setLike]=useState(artwork.likesCount);
    
    const handleLikeCounts=()=>{
        fetch(`http://localhost:3000/exploreArtworks/like/${artwork._id}`,{
            method:"PATCH",
        })
        .then(res=>res.json())
        .then((data)=>{
            if(data.modifiedCount)
            {
                toast.success("You liked this content!");
                setLike(like+1);
            }
        })
    }

    const handleAddToFavourites=()=>{
        fetch(`http://localhost:3000/favourites/${artwork._id}`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify({
                userEmail:user.email,
                artworkId:artwork._id
            })
        })
        .then(res=>res.json())
        .then((data)=>{
            if(data.insertedId){
                toast.success("Content is added to your favourite list!");
            }
        })
    }
    
    return (
        <div className='w-11/12 mx-auto'>
            <div className="hero bg-base-100 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                    src={artwork.image}
                    className="w-full md:max-w-sm lg:max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                    <h1 className="text-3xl font-bold">{artwork.title}</h1>
                    <p className='text-xl font-semibold'>{artwork.artistName}</p>
                    <p>{artwork.mediumTools}</p>
                    <p></p>
                    <p className="py-6">{artwork.description}</p>
                    <div className='flex items-center gap-10'>
                        <div className='flex items-center text-xl gap-2'>
                            <img onClick={handleLikeCounts} src={likeImg} alt="" />
                            <p>{like}</p>
                        </div>
                        <img onClick={handleAddToFavourites} src={favImg} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkDetails;
