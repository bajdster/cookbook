import React from 'react'
import classes from "./Nav.module.scss";
import logo from "../assets/logo.png";
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {

  const navigate = useNavigate()

  const getRandomRecipe = async () =>
  {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=3a9aab141bca4fdaa4ed1028bfbe27b1`);
    const data = await response.json();

    navigate(`/${data.recipes[0].id}`)
  }

  return (
    <nav className={classes.mainNav}>
      <Link to="/">
        <div className={classes.logoImage}>
          <img src={logo} alt="app logo"></img>

        </div>
      </Link>
      
      <div className={classes.randomRecipe}>
        <button onClick ={getRandomRecipe}>Random Recipe</button>
      </div>
    </nav>
  )
}

export default Nav