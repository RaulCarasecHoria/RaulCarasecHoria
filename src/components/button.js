import React from 'react'

const Button = ({text}) => {
  return (

    <button style={{ 
        
      backgroundColor: "#4CAF50", /* Green */
      color: "none",
      padding: "15px 32px",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "16px",



  }}> {text} </button>


  )
}

export default Button