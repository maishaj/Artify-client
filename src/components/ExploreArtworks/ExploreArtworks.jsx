import React, { use, useState } from "react";
import ExploreArtCard from "../ExploreArtCard/ExploreArtCard";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from '../Loading/Loading';

const ExploreArtworks = ({exploreArtworkPromise}) => {
  
  const [artworks, setArtworks] = useState([]);
  const [searchQuery,setSearchQuery]=useState("");
  const [initialized, setInitialized] = useState(false);


  if(!initialized)
  {
    exploreArtworkPromise.then((data)=>{
      setArtworks(data);
      setInitialized(true);
    })
  }

  const handleSearch=async(e)=>{
    const query=e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      const data = await exploreArtworkPromise;
      setArtworks(data);
      return;
    }

    const res=await fetch(`http://localhost:3000/searchArtworks?query=${query}`);
    const data=await res.json();
    setArtworks(data);
  }
  
  return (
    <div className="w-11/12 mx-auto">
       <div className="flex justify-center m-10">
        <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input value={searchQuery} onChange={handleSearch} type="search" required placeholder="Search by title or artist" />
        </label>
       </div>
       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-10 lg:gap-10">
          {
           artworks.map(artwork=><ExploreArtCard key={artwork._id} artwork={artwork}></ExploreArtCard>)
          }
       </div>
    </div>
  );
};

export default ExploreArtworks;
