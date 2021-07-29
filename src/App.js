import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import student from "./images/college.png"
import Navbar from './Navbar'
import FloatingChar from './FloatingChar'
import DefaultText from './DefaultText'
function App() {
  return (
    <>
            {/* <div className="background-image"></div> */}
        <Router>
        <Route path='/:type' children={<FloatingChar />}></Route>
        <Route path='/' exact>
          <div  className="grid-container">
              <h1><DefaultText/></h1>
              <div className="floating">
              <img src={student} className="fullPhoto" alt="charcater"/>
              </div>
            <Navbar iType="studies" />
          </div>
        </Route>
      </Router>

    </>
  )
}

export default App
