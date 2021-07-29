import React, { useState ,useEffect} from 'react'
import student from "./images/college.png"
import coder from './images/coding.png'
import painter from './images/designing.png'
import contact  from './images/contact.png'
import Navbar from './Navbar'
import studentText from './studentText'
import contactText from './contactText'
import painterText from './painterText'
import coderText from './coderText'
import { useParams } from 'react-router-dom';
const FloatingChar = () => {
  let { type } = useParams();
  let [char, setChar] = useState(student);
  let [text, setText] = useState(studentText);
  useEffect(() => {
    if(type==="coding")
      {setChar(coder);setText(coderText);}
    else if (type === "designing")
    { setChar(painter);setText(painterText)}
    else if (type === "studies")
    { setChar(student);setText(studentText)}
    else
    { setChar(contact);setText(contactText)}
  },[type]);
  return (
    <>
      <div  className="grid-container">
        {text}
        <div className="floating">
          <img src={char} className="fullPhoto" alt="charcater"/>
        </div>
        <Navbar iType={type} />
      </div>
    </>
  )
}

export default FloatingChar
