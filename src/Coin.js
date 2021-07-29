import React from 'react'

const Coin = ({ clr, fImg}) => {
  var x = process.env.PUBLIC_URL 
  var z = `url(${x}${fImg})`
  var y ="coin__edge"+clr
  var fstyle = {
    backgroundImage: z
  }

  return <>
            {/* <img src= /> */}
            <div className="coin">
          <div className="coin__front" style={fstyle}></div>
          <div className= {y} >
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
          <div className="coin__back" style={fstyle}></div>
        </div>
    </>
}
export default Coin;