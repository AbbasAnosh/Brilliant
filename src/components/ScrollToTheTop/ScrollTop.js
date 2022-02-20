import React, {useState} from 'react'
import { AiOutlineArrowUp } from "react-icons/ai"
import "./ScrollTop.css"

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 90 ? setVisible(true) : setVisible(false);
  })
  return (
    <div className="scroll">
      <a href="#" className={`${visible ? " " : "none"}`}>
        <AiOutlineArrowUp/>
      </a>
    </div>
  )
}

export default ScrollTop