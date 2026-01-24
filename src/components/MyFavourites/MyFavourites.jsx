import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import MyFavouriteCard from "../MyFavouriteCard/MyFavouriteCard";

const MyFavourites = () => {
  const { user } = use(AuthContext);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    fetch(
      `https://artify-server-one.vercel.app/favourites/?email=${user.email}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setFav(data);
      });
  }, [user.email]);

  const removeFromUI = (artworkId) => {
    const remaining = fav.filter((fv) => fv._id !== artworkId);
    setFav(remaining);
  };

  return (
    <div>
      <h1 className="text-2xl text-center font-bold m-10">
        Favourite Artworks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 w-11/12 mx-auto m-10">
        {fav.map((fv) => (
          <MyFavouriteCard
            key={fv._id}
            artwork={fv}
            fav={fav}
            onRemove={removeFromUI}
          ></MyFavouriteCard>
        ))}
      </div>
    </div>
  );
};

export default MyFavourites;
