import React, { Suspense } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ExploreArtworks from "../components/ExploreArtworks/ExploreArtworks";
import Loading from "../components/Loading/Loading";

const ExploreArtworkLayout = () => {
  const exploreArtworkPromise = fetch(
    "https://artify-server-one.vercel.app/exploreArtworks",
  ).then((res) => res.json());

  return (
    <div>
      <Navbar></Navbar>
      <Suspense fallback={<Loading></Loading>}>
        <ExploreArtworks
          exploreArtworkPromise={exploreArtworkPromise}
        ></ExploreArtworks>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default ExploreArtworkLayout;
