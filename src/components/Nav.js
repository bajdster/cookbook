import React from 'react'
import classes from "./Nav.module.scss";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={classes.mainNav}>
      <Link to="/">
        <div className={classes.logoImage}>
          <img src={logo}></img>

        </div>
      </Link>
      
      <div className={classes.randomRecipe}>
        <button>Random Recipe</button>
      </div>
    </nav>
  )
}

export default Nav