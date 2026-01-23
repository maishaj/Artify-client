import React, { useState } from "react";
import ExploreArtCard from "../ExploreArtCard/ExploreArtCard";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from '../Loading/Loading';

const ExploreArtworks = ({exploreArtworkPromise}) => {
  
  const [artworks, setArtworks] = useState([]);
  const [searchQuery,setSearchQuery]=useState("");
  const [initialized, setInitialized] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [categories, setCategories] = useState([]); 



  if(!initialized)
  {
    exploreArtworkPromise.then((data)=>{
      setArtworks(data);
      setCategories([...new Set(data.map((art) => art.category))]);
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

  const handleCategoryFilter = async (e) => {
  const selectedCategory = e.target.value;
  setCategoryFilter(selectedCategory);
  
  let data = await exploreArtworkPromise;
  if (selectedCategory) {
    data = data.filter((art) => art.category === selectedCategory);
  }
  setArtworks(data);
};
  
  return (
    <div className="w-11/12 mx-auto m-10">
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 mb-10">
          <div>
              <select className="input" value={categoryFilter} onChange={handleCategoryFilter}>
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center">
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
