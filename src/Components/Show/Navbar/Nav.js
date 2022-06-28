import { Link } from 'react-router-dom';
import React from 'react';
import "./Nav.css"

const Nav = () => {


  return <div className='nav'>
          <nav className="navbar ">
                 <h1><b>TMDB</b></h1>
                 <button></button>
                <Link className="navbar-brand text-white" to={"/"}>Home</Link>
                <Link className="navbar-brand text-white" to={"/trending"}>Trending</Link>
                <Link className="navbar-brand text-white" to={"/weekly"}>weekly</Link>
                <Link className="navbar-brand text-white" to={"/more"}>More</Link>
        
          </nav>
         
         

  </div>;
};

export default Nav;
