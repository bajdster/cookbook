import React from 'react'
import classes from "./IngredientItem.module.scss"
import {Link} from "react-router-dom"

const RecipeItem = ({title, image, id}) => {
  return (
    <Link to={"/"+id}>
    <div className={classes.ingredientItem}>
        
        <img src={image} alt={title}></img>
        <p>{title}</p>
        
    </div>
    </Link>
  )
}

export default RecipeItem