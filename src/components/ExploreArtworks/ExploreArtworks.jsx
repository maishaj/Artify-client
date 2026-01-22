import React, { use } from "react";
import ExploreArtCard from "../ExploreArtCard/ExploreArtCard";

const ExploreArtworks = ({exploreArtworkPromise}) => {
  
  const artworks=use(exploreArtworkPromise);
  
  return (
    <div className="w-11/12 mx-auto m-20">
       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
          {
           artworks.map(artwork=><ExploreArtCard artwork={artwork}></ExploreArtCard>)
          }
       </div>
    </div>
  );
};

export default ExploreArtworks;
