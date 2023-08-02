import React from 'react'
import classes from "./Error.module.scss"

const Error = () => {
  return (
    <div className={classes.errorPage}>
    <h2>404 Page Not found</h2>
    <p>Something went wrong</p>
    </div>
  )
}

export default Error