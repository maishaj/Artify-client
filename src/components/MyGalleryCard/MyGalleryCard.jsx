import React, { use, useRef, useState } from "react";
import like from "../../assets/realLike.png";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const MyGalleryCard = ({ artwork, onRemove }) => {
  const { user } = use(AuthContext);
  const [ArtworkData, setArtworkData] = useState(artwork);

  const [visibility, setVisibility] = useState(artwork.visibility);
  const [image, setImage] = useState(artwork.image);
  const [title, setTitle] = useState(artwork.title);
  const [category, setCategory] = useState(artwork.category);
  const [medium, setMedium] = useState(artwork.mediumTools);
  const [description, setDescription] = useState(artwork.description);
  const [Dimension, setDimension] = useState(artwork.dimensions);
  const [price, setPrice] = useState(artwork.price);

  const modalRef = useRef();

  const handleDeleteFromGallery = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        fetch(
          `https://artify-server-one.vercel.app/mygallery/delete/${artwork._id}`,
          {
            method: "DELETE",
          },
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              onRemove(artwork._id);
            }
          });
      }
    });
  };

  const handleModal = () => {
    modalRef.current.showModal();
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedArtwork = {
      image,
      title,
      category,
      mediumTools: medium,
      description,
      dimensions: Dimension,
      price,
      visibility,
    };

    fetch(
      `https://artify-server-one.vercel.app/myArtworks/update/${artwork._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedArtwork),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Artwork info is updated successfully");
          setArtworkData((prev) => ({ ...prev, ...updatedArtwork }));
          e.target.reset();
          modalRef.current.close();
        }
      });
  };

  return (
    <div>
      <div className="rounded-2xl p-2">
        <div className="card bg-base-100 w-full h-full shadow-sm">
          <div>
            <img src={ArtworkData.image} alt="" />
          </div>
          <div className="card-body">
            <h2 className="card-title">{ArtworkData.title}</h2>
            <p>{ArtworkData.artistName}</p>
            <p>Category: {ArtworkData.category}</p>
            <div className="flex flex-row justify-center items-center gap-2">
              <button>
                <img className="w-5 h-5" src={like} alt="" />
              </button>
              <p>{ArtworkData.likesCount}</p>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={handleDeleteFromGallery}
                className="my-btn my-btn:hover btn btn-primary mx-auto"
              >
                Delete
              </button>
              <button
                onClick={handleModal}
                className="my-btn my-btn:hover btn btn-primary mx-auto"
              >
                Update
              </button>
              <dialog
                ref={modalRef}
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <div className="m-5">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto p-4">
                      <h1 className="text-2xl text-center font-bold">
                        Add Artwork
                      </h1>
                      <div className="card-body">
                        <form onSubmit={handleUpdate} className="fieldset">
                          <label className="label">Image URL</label>
                          <input
                            name="imageURL"
                            type="text"
                            className="input"
                            placeholder="image url"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                          />

                          <label className="label">Title</label>
                          <input
                            name="title"
                            type="text"
                            className="input"
                            placeholder="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />

                          <label className="label">Category</label>
                          <input
                            name="category"
                            type="text"
                            className="input"
                            placeholder="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          />

                          <label className="label">Medium</label>
                          <input
                            name="medium"
                            type="text"
                            className="input"
                            placeholder="medium"
                            value={medium}
                            onChange={(e) => setMedium(e.target.value)}
                          />

                          <label className="label">Description</label>
                          <input
                            name="description"
                            type="text"
                            className="input"
                            placeholder="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />

                          <label className="label">Dimensions</label>
                          <input
                            name="dimensions"
                            type="text"
                            className="input"
                            placeholder="dimensions"
                            value={Dimension}
                            onChange={(e) => setDimension(e.target.value)}
                          />

                          <label className="label">Price</label>
                          <input
                            name="price"
                            type="text"
                            className="input"
                            placeholder="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />

                          <p className="label">Visibility</p>
                          <label className="label">
                            <input
                              type="radio"
                              name="visibility"
                              value="Public"
                              checked={visibility === "Public"}
                              onChange={(e) => setVisibility(e.target.value)}
                            />
                            Public
                          </label>
                          <label className="label">
                            <input
                              type="radio"
                              name="visibility"
                              value="Private"
                              checked={visibility === "Private"}
                              onChange={(e) => setVisibility(e.target.value)}
                            />
                            Private
                          </label>

                          <label className="label">Username</label>
                          <input
                            name="username"
                            value={user.displayName}
                            type="text"
                            className="input"
                            placeholder="username"
                            readOnly
                          />

                          <label className="label">Email</label>
                          <input
                            name="email"
                            value={user.email}
                            type="text"
                            className="input"
                            placeholder="email"
                            readOnly
                          />
                          <button className="my-btn my-btn:hover btn btn-neutral mt-4 border-0 text-white">
                            Update
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn my-btn my-btn:hover text-white">
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGalleryCard;
