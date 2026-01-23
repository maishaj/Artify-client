import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
    
  const location=useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState(null);
  const { user, setUser, createUser, signInWithGoogle, updateProfile } = use(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoURL.value;
    const password = e.target.password.value;

    if (!regex.test(password)) {
      setError(
        "Password must have uppercase, lowercase, and at least 6 characters",
      );
      return;
    }

    setError("");

    const newUser = { name, email, photo };

    await createUser(email, password)
      .then(async (userCred) => {
        const user = userCred.user;
        await updateProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((err) => {
            setUser(user);
          });
      })
      .catch((err) => {
        toast.error(err);
      });

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("You registered successfully!");
          navigate(from, { replace: true });
          e.target.reset();
        }
      });
      navigate(from, { replace: true });
  };

  const handleGoogleLogin =async() => {
    await signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        toast.success("You logged in successfully!");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
        <h1 className="text-3xl text-center font-bold">Register Now</h1>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              className="input"
              placeholder="photo url"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <p>
              Already have an account?{" "}
              <span>
                <Link className="underline" to="/login">
                  Login
                </Link>
              </span>
            </p>
            {error && <p className="text-semibold text-red-500">{error}</p>}
            <button className="btn my-btn text-white my-btn:hover mt-4">
              Register
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
