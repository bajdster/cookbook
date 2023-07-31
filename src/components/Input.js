import React, {useEffect, useState} from 'react'
import {FaWindowClose} from "react-icons/fa"
import classes from "./Input.module.scss"
import IngredientItem from './IngredientItem'

const Input = () => {

    const [ingredient, setIngredient] = useState("");
    const [allIngredients, setAllIngredients] = useState({results:[{name:"milk", id: 1, img: "milk.png"}, {name:"eggs", id: 2, img: "milk.png"}]});
    const [usedIngredients, setUsedIngredients] = useState([])
    const [recipeSearchingMode, setRecipeSearchingMode] = useState(false)

    const getIngredient = (e) =>
    {   
        setIngredient(e.target.value)
    }

    const clearInputHandler = ()=>
    {
        setIngredient("")
    }

    const addUsedIngredients = (name) =>
    {
        setUsedIngredients((prev)=>
        {
            return [...prev, name]
        })
    }

    const searchRecipes = (e) =>
    {
        e.preventDefault();
        setRecipeSearchingMode(true)
        let ingredients = "";
        usedIngredients.forEach((el,index)=>
            {
                if(index === 0) ingredients+=el;
                else ingredients+=`+${el}`
            })
        // const searchRecipes = async () =>
        // {
        //     const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=12&apiKey=3a9aab141bca4fdaa4ed1028bfbe27b1`)
        //     const data = await response.json();

        //     console.log(data)
        // }


        // searchRecipes()
    }

    useEffect(()=>
    {
        setRecipeSearchingMode(false);
        
        // const searchIngredients = async () =>
        // {
        //     const response = await fetch(`https://api.spoonacular.com/food/ingredients/search?query=${ingredient}&number=12&apiKey=3a9aab141bca4fdaa4ed1028bfbe27b1`)
        //     const data = await response.json();
        //     setAllIngredients(data);
        // }

       
        const typingTimer = setTimeout(()=>
        {
            // searchIngredients()
            console.log("fetch recipes")
        }, 1500)

        return ()=>
        {
            clearInterval(typingTimer)
        }
        
    }, [ingredient])

console.log(allIngredients.results)

    
  return (
    <div className={classes.search}>
    <form>
        {usedIngredients.length>0 && <button className={classes.searchRecipes} onClick={searchRecipes}>Search</button>}
        <input type="text" placeholder='Search ingredients' onChange={getIngredient} value={ingredient}></input>
        {ingredient !== "" && <FaWindowClose className={classes.close} onClick ={clearInputHandler}/>}
       
    </form>
    
    <ul className={classes.usedIngredients}>
        {usedIngredients.map((item, index)=>
        {
            return <li key={index}>{item}</li>
        })}
    </ul>

    <div className={classes.ingredients}>
        {allIngredients.results && !recipeSearchingMode && allIngredients.results.map(item=>
        {
            return <IngredientItem name={item.name} image={item.image} id={item.id} key={item.id} addIngredient={addUsedIngredients}/>
        })}
    </div>
</div>
  )
}

export default Input

//zmien na ref bo za duzo zapytan i limit sie przekracza...