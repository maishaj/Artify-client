import React, { Suspense } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ExploreArtworks from "../components/ExploreArtworks/ExploreArtworks";

const ExploreArtworkLayout = () => {
  const exploreArtworkPromise=fetch('http://localhost:3000/exploreArtworks').then(res=>res.json());

  return (
    <div>
      <Navbar></Navbar>
      <Suspense>
        <ExploreArtworks exploreArtworkPromise={exploreArtworkPromise}></ExploreArtworks>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default ExploreArtworkLayout;
