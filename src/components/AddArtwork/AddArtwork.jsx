import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const AddArtwork = () => {
  const { user } = use(AuthContext);

  const handleSubmitArtwork = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.imageURL.value;
    const title = form.title.value;
    const artistName = user.displayName;
    const category = form.category.value;
    const medium = form.medium.value;
    const description = form.description.value;
    const dimensions = form.dimensions.value;
    const price = Number(form.price.value);
    const visibility = form.visibility.value;

    const newArt = {
      image,
      title,
      artistName,
      category,
      mediumTools: medium,
      description,
      dimensions,
      price,
      visibility,
      userName: user.displayName,
      userEmail: user.email,
      likesCount: 0,
      createdAt: new Date(),
    };

    fetch("http://localhost:3000/exploreArtworks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArt),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        toast.success("Artwork added successfully!");
      });
  };

  return (
    <div className="m-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto p-4">
        <h1 className="text-2xl text-center font-bold">Add Artwork</h1>
        <div className="card-body">
          <form onSubmit={handleSubmitArtwork} className="fieldset">
            <label className="label">Image URL</label>
            <input
              name="imageURL"
              type="text"
              className="input"
              placeholder="image url"
              required
            />

            <label className="label">Title</label>
            <input
              name="title"
              type="text"
              className="input"
              placeholder="title"
              required
            />

            <label className="label">Category</label>
            <input
              name="category"
              type="text"
              className="input"
              placeholder="category"
              required
            />

            <label className="label">Medium</label>
            <input
              name="medium"
              type="text"
              className="input"
              placeholder="medium"
              required
            />

            <label className="label">Description</label>
            <input
              name="description"
              type="text"
              className="input"
              placeholder="description"
              required
            />

            <label className="label">Dimensions</label>
            <input
              name="dimensions"
              type="text"
              className="input"
              placeholder="dimensions"
              required
            />

            <label className="label">Price</label>
            <input
              name="price"
              type="text"
              className="input"
              placeholder="price"
              required
            />

            <p className="label">Visibility</p>
            <label className="label">
              <input type="radio" name="visibility" value="Public" required />
              Public
            </label>
            <label className="label">
              <input type="radio" name="visibility" value="Private" />
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArtwork;
