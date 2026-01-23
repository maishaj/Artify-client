import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import ExploreArtCard from '../ExploreArtCard/ExploreArtCard';

const MyFavourites = () => {

    const {user}=use(AuthContext);
    const [fav,setFav]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3000/favourites/?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setFav(data);
        })
    },[user.email])

    console.log(fav);
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 w-11/12 mx-auto m-10'>
            {
                fav.map(fv=><ExploreArtCard key={fv._id} artwork={fv}></ExploreArtCard>)
            }
        </div>
    );
};

export default MyFavourites;