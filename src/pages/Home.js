import React from 'react'
import classes from "./Home.module.scss";
import burger from "../assets/burger.png"
import Input from '../components/Input';
import Spline from "@splinetool/react-spline"

const Home = () => {
  return (
    <main className={classes.home}>

        <div className={classes.hamburgerIcon}>
            <h2>Hungry?</h2> <h2>Don't know</h2><h2> what to eat ?</h2>
            <h3>Add your ingredients and find new inspiration</h3>
            {/* <img src={burger} alt="burger icon"></img> */}
            <Spline scene="https://prod.spline.design/F72OqjQ4gpvJL4Sr/scene.splinecode" />
        </div>
       <Input/>
    </main>
  )
}

export default Home