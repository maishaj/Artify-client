import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import ExploreArtCard from "../ExploreArtCard/ExploreArtCard";
import MyGalleryCard from "../MyGalleryCard/MyGalleryCard";

const MyGallery = () => {
  const { user } = use(AuthContext);
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch(
      `https://artify-server-one.vercel.app/myArtworks/?email=${user.email}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data);
      });
  }, [user.email]);

  const removeFromUI = (artworkId) => {
    const remaining = artworks.filter((art) => art._id !== artworkId);
    setArtworks(remaining);
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl text-center font-bold m-10">My Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3">
        {artworks.map((artwork) => (
          <MyGalleryCard
            key={artwork._id}
            artwork={artwork}
            onRemove={removeFromUI}
          ></MyGalleryCard>
        ))}
      </div>
    </div>
  );
};

export default MyGallery;
