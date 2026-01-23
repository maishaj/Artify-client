import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { setUser, signInUser, signInWithGoogle, updateProfile } =
    use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    signInUser(email, password)
      .then(async(userCredential) => {
        const user = userCredential.user;
        navigate(from, { replace: true });
        toast.success("You logged in successfully!");
        e.target.reset();
        await updateProfile({
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
          .then(() => {
            setUser({
              ...user,
              displayName: user.displayName,
              photoURL: user.photoURL,
            });
          })
          .catch((err) => {
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(error);
      });
  };

  const handleGoogleLogin = () => {
       signInWithGoogle()
      .then((result) => {
        const user = result.user;
        // navigate(`${location.state ? location.state : "/"}`);
        navigate(from, { replace: true });
        toast.success("You logged in successfully!");
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <div className="flex justify-center items-center mt-50">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
        <h1 className="text-3xl text-center font-bold">Login Now</h1>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <p>
              Don't have an account?{" "}
              <span>
                <Link className="underline" to="/register">
                  Register
                </Link>
              </span>
            </p>
            <button className="btn my-btn text-white my-btn:hover mt-4">
              Login
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

export default Login;
