import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom';
import classes from "./Recipe.module.scss"

const Recipe = () => {

  const params = useParams()
  const data = useLoaderData()

  console.log(data)
  return (
    <div className={classes.mainView}>
      <h1>{data.title}</h1>
      <div className={classes.prerequisites}>
        <div className={classes.basicView}>
          <img src={data.image}></img>
          <ul>
            <li className={classes.time}>Time: {data.readyInMinutes} min</li>
            <li className={classes.servings}>Servings: {data.servings}</li>
            {data.dishTypes.map(el=>
            {
              return <li key={el} className={classes.tags}>{el}</li>
            })}
          </ul>
        </div>
        <div className={classes.ingredients}>
            
            <ul>
            <h2>Ingredeints:</h2>
              {data.extendedIngredients.map((ingredient,index)=>
              {
                return <li>{index+1+". "}{ingredient.original}</li>
              })}
            </ul>
        </div>
      </div>
      
      <div className={classes.stepsRecipe}>
        <div className={classes.steps}>
              <ul>
                {data.analyzedInstructions.map(instruction=>
                {
                  return instruction.steps.map(singleStep=>
                  {
                    return <li><strong>{singleStep.number + ". "}</strong>{singleStep.step}</li>
                    
                  })
                })}
              </ul>
        </div>
        <div className={classes.summary}>
          <p dangerouslySetInnerHTML={{ __html: data.summary }} />
        </div>
      </div>
    </div>
  )
}

export default Recipe

export async function loader({request, params})
{
  const recipeId = params.recipe;

  const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?&apiKey=3a9aab141bca4fdaa4ed1028bfbe27b1`)
  const data = await response.json()

  return data;
}