import "../styles/Container.css"
import { useState } from "react"
import download from "../assets/download.svg"
import { useRef } from "react"
import generatePDF from "react-to-pdf"
import CV from "./CV"
import Information from "./Information"
import Header from "./Header"
import Personal from "./Personal"

function Container() {
  const [data, setData] = useState("")

  function childToParent(inputs) {
    setData(inputs)
    console.log("test 2 data", data)
  }
  const targetRef = useRef(null)
  return (
    <div className='container'>
      <Information>
        <Header>
          <button
            onClick={() => generatePDF(targetRef, { filename: "resume.pdf" })}
          >
            {" "}
            <img src={download} alt='download' />
            Download
          </button>
        </Header>
        <Personal childToParent={childToParent} />
      </Information>
      <div className='cv-container' ref={targetRef}>
        <CV />
      </div>
    </div>
  )
}

export default Container
