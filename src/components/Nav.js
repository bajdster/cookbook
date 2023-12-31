import React, { useEffect, useState } from 'react'
import classes from "./Nav.module.scss";
import logo from "../assets/logo.png";
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {

  const navigate = useNavigate()
  const [error, setError] = useState("")

  const getRandomRecipe = async () =>
  {
    try
    {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=3a9aab141bca4fdaa4ed1028bfbe27b1`);
      const data = await response.json();
  
      navigate(`/${data.recipes[0].id}`)
    }
    catch(err)
    {
      setError("Przekroczono liczbę zapytań")
      console.error(err)
    }
    
  }

  useEffect(()=>
  {
    if(error === "") return 
    else alert("Przekroczono dzienną liczbę zapytań")
  }, [error])

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