import React from 'react'
import Coin from './Coin'
const coderText = () => {
  return <h1>
    
    <div className="coin-container">
      <Coin clr="_gold" fImg="/CoinImages/pythonCoin.png"/>
      <Coin clr="_gold" fImg="/CoinImages/cppCoin.png"/>
      <Coin clr="_gold" fImg="/CoinImages/jsCoin.png"/>
      <Coin clr="_gold" fImg="/CoinImages/sqlCoin.png"/>
      <Coin clr="_gold" fImg="/CoinImages/htmlCoin.png"/>
      <Coin clr="_gold" fImg="/CoinImages/cssCoin.png"/>
      <Coin clr="_silver" fImg="/CoinImages/reactCoin.png"/>
      <Coin clr="_silver" fImg="/CoinImages/figmaCoin.png"/>
      <Coin clr="_bronze" fImg="/CoinImages/phpCoin.png"/>
    </div>
    </h1>
}
export default coderText;