import sButton from './images/sButton.png'
import dButton from './images/dButton.png'
import cButton from './images/cButton.png'
import sgButton from './images/sBButton.gif'
import dgButton from './images/dBButton.gif'
import cgButton from './images/cBButton.gif'
import Button from './images/Button.png'
import gButton from './images/BButton.gif'

import { Link } from 'react-router-dom';

const Navbar = ({ iType }) => {
  const retImage = (s) => {
  return (
    <img src={s} alt={s} className="charSelect"></img>
  )
}
  const returnImage = (iT, T) => {
  // console.log(iT,T)
  if (iT === T) {
    if (iT === "studies") return retImage(sgButton);
    if (iT === "coding") return retImage(cgButton);
    if (iT === "designing") return retImage(dgButton);
    if (iT === "contact") return retImage(gButton);
  }
  else {
    if (T === "contact") return retImage(Button);
    if (T === "studies") return retImage(sButton);
    if (T === "coding") return retImage(cButton);
    if (T === "designing") return retImage(dButton);
  }
  }

  const st = returnImage(iType, "studies")
  const cd = returnImage(iType, "coding")
  const ct = returnImage(iType,"contact")
  const de = returnImage(iType, "designing")
  return (
    <nav>
      <ul>
        <li>
          <Link to='/studies'>{st}</Link>
        </li>
        <li>
          <Link to='/coding'>{cd}</Link>
        </li>
        <li>
          <Link to='/designing'>{de}</Link>
        </li>
        <li>
          <Link to='/contact'>{ct}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar