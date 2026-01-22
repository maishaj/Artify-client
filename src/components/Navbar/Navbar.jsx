import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {

    const {user,logout}=use(AuthContext);

    const handleLogout=()=>{
        logout()
        .then()
        .catch((err)=>{
        })
    }

    const links=
    <>
       <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/exploreArtworks">Explore Artworks</NavLink></li>
       {
         user &&
         <>
            <li><NavLink to="/addArtwork">Add Artwork</NavLink></li>
            <li><NavLink to="/myGallery">My Gallery</NavLink></li>
            <li><NavLink to="/myFavourites">My Favorites</NavLink></li>
         </>
       }
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow z-9">
                        {links}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">Artify</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user?
                        <p className='flex gap-2'>
                            <img className='w-11 h-11 rounded-full' title={user?.displayName} src={user.photoURL} alt="" />
                            <button onClick={handleLogout} className="btn">Logout</button>
                        </p>:
                        <p className='flex gap-2'>
                            <Link to="/login" className="btn">Login</Link>
                            <Link to="/register" className="btn">Register</Link>
                        </p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;