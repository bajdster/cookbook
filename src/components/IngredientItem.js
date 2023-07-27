import React from 'react'
import classes from "./IngredientItem.module.scss"

const IngredientItem = ({name, image, id}) => {
  return (
    <div className={classes.ingredientItem}>
        <p>{name}</p>
        <img src={'https://spoonacular.com/cdn/ingredients_100x100/'+image}></img>
    </div>
  )
}

export default IngredientItem