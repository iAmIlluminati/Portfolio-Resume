import React from 'react'
import g from "./images/mail.png"
import l from "./images/linkedin.png"
import d from "./images/drive.png"
const contactText = () => {
  const mailto="mailto:vinokrish001@gmail.com"
  return <h1>
    <p style={{fontSize:"2.5em"}}>Contact</p>
    <div className="contact-grid">
      <a href="mailto:vinokrish001@gmail.com"><img className="cImg" src={g} alt="email" title="vinokrish001@gmail.com" onClick={(e) => {
        window.location = mailto;
      }}></img></a>
      <a href="https://drive.google.com/file/d/1jNTI2kbpf-stkVLpr61qqZbj9RNb_Gj3/"><img  className="cImg" src={d} alt="resume" title="Resume" ></img></a>
      <a href="https://www.linkedin.com/in/krishnan-r-54769a177/"><img className="cImg" src={l} alt="linkedin"></img></a>
      </div>
    
      </h1>
}
export default contactText;