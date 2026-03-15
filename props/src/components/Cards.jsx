import React from 'react'

const Cards = (props) => {
  console.log(props)
  return (
    <div>
      <div className="card">
        <img src={props.img} />
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Cards
