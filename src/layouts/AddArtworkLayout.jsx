import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AddArtwork from "../components/AddArtwork/AddArtwork";
import Footer from "../components/Footer/Footer";

const AddArtworkLayout = () => {
  return (
    <div>
       <Navbar></Navbar>
       <AddArtwork></AddArtwork>
       <Footer></Footer>
    </div>
  );
};

export default AddArtworkLayout;
