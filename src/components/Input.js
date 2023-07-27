import React, {useEffect, useState} from 'react'
import {FaWindowClose} from "react-icons/fa"
import classes from "./Input.module.scss"
import IngredientItem from './IngredientItem'

const Input = () => {

    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const getIngredient = (e) =>
    {   
        setIngredient(e.target.value)
    }

    useEffect(()=>
    {
        const searchIngredients = async () =>
        {
            const response = await fetch(`https://api.spoonacular.com/food/ingredients/search?query=${ingredient}&number=12&apiKey=3a9aab141bca4fdaa4ed1028bfbe27b1`)
            const data = await response.json();
            setIngredients(data);
        }

        searchIngredients()
        
    }, [ingredient])

console.log(ingredients.results)

    
  return (
    <div className={classes.search}>
    <form>
        <input type="text" placeholder='Search ingredients' onChange={getIngredient} value={ingredient}></input>
        <FaWindowClose className={classes.close}/>
       
    </form>

    <div className={classes.ingredients}>
        {ingredients.results && ingredients.results.map(item=>
        {
            return <IngredientItem name={item.name} image={item.image} id={item.id}/>
        })}
    </div>
</div>
  )
}

export default Input

//zmien na ref bo za duzo zapytan i limit sie przekracza...