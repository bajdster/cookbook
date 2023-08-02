import React, {useEffect, useState} from 'react'
import {FaWindowClose} from "react-icons/fa"
import classes from "./Input.module.scss"
import IngredientItem from './IngredientItem'
import RecipeItem from './RecipeItem'
import { useNavigation } from 'react-router-dom'
import loadingAnimation from "../assets/loading2.gif"

const Input = () => {

    const [ingredient, setIngredient] = useState("");
    const [allIngredients, setAllIngredients] = useState("");
    const [usedIngredients, setUsedIngredients] = useState([])
    const [recipeSearchingMode, setRecipeSearchingMode] = useState(false)
    const [allRecipes, setAllRecipes] = useState([{title:"milk", id: 1, img: "milk.png"}, {title:"eggs", id: 2, img: "milk.png"}])
    const [noFound, setNoFound] = useState(false)
    const [loading, setLoading] = useState(false)


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


    useEffect(()=>
    {
        setRecipeSearchingMode(false);
        setLoading(true)
        setNoFound(false)

        const searchIngredients = async () =>
        {
            
            const response = await fetch(`https://api.spoonacular.com/food/ingredients/search?query=${ingredient}&number=12&apiKey=3a9aab141bca4fdaa4ed1028bfbe27b1`)
            const data = await response.json();

            if(allIngredients !== "" && data.results.length === 0)
            {
                setNoFound(true);
                console.log(data.length)
            }
            else
            {
                setNoFound(false)
                setAllIngredients(data);
            }
            setLoading(false)
        }

       
        const typingTimer = setTimeout(()=>
        {
            searchIngredients()
            console.log("fetch recipes")
        }, 1500)

        return ()=>
        {
            clearInterval(typingTimer)
        }
        
    }, [ingredient])

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
        const searchFood = async () =>
        {
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=12&apiKey=3a9aab141bca4fdaa4ed1028bfbe27b1`)
            const data = await response.json();

            setAllRecipes(data)
        }


        searchFood()
    }

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

        {loading 
        ? <div className={classes.loading}><img src={loadingAnimation} alt = 'loading'></img></div> 
        : <div className={classes.ingredients}>
            {allIngredients.results && !recipeSearchingMode && allIngredients.results.map(item=>
            {
                return <IngredientItem name={item.name} image={item.image} id={item.id} key={item.id} addIngredient={addUsedIngredients}/>
            })}

            {allRecipes && recipeSearchingMode && allRecipes.map(item =>
            {
                return <RecipeItem key = {item.id} id={item.id} title={item.title} image={item.image}/>
            })}
        </div>}
        {noFound && <div className={classes.noFound}>No ingredients found</div>}
    </div>
  )
}

export default Input

//zmien na ref bo za duzo zapytan i limit sie przekracza...