import React from "react"
import { useState } from "react/cjs/react.production.min"
import data from '../data.json'
import './grocery.css'


const GroceryDetails = ()=>{
// console.log('props:', props)
console.log(data)

// const [item,setItem] = useState(value)

const handleClick = (e) => {
console.log(e.target)
    return(
        <>
        <button>+</button>
        <button>-</button>
        </>
    )

}

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
            {data.map( (elem) => {
                return (
                    <>
                      <div className="cont">
                          <img src={elem.imgURL} alt="" />
                          <h2>{elem.title}</h2>

                          <div id="price">
                          <h4>{elem.sellingPrice}</h4>
                          <p>M.R.P: </p>
                          <p><s>{elem.mrp}</s></p>
                          </div>

                          <button onClick={handleClick} className="btn">Add to Cart</button>
                      </div>
                    </>
                )
            } )}
        </div>
        </>
    )
}
export default GroceryDetails