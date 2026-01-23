import React, { Suspense } from "react";
import Navbar from "../components/Navbar/Navbar";
import MyFavourites from "../components/MyFavourites/MyFavourites";
import Footer from "../components/Footer/Footer";

const MyFavouritesLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Suspense>
        <MyFavourites></MyFavourites>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default MyFavouritesLayout;
