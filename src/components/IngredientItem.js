import React from 'react'
import classes from "./IngredientItem.module.scss"

const IngredientItem = ({name, image, id, addIngredient}) => {
  return (
    <div className={classes.ingredientItem}>
        
        <img src={'https://spoonacular.com/cdn/ingredients_100x100/'+image}></img>
        
        <p>{name}</p>
        <button onClick = {()=>
        {
            addIngredient(name)
        }}>+</button>
    </div>
  )
}

export default IngredientItem