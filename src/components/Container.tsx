import "../styles/Container.css"
import { useRef } from "react"
import generatePDF from "react-to-pdf"
import CV from "./CV"
import Information from "./Information"
import Header from "./Header"
import Personal from "./Personal"

function Container() {
  const targetRef = useRef(null)
  return (
    <div className='container'>
      <Information>
        <Header>
          <button
            onClick={() => generatePDF(targetRef, { filename: "resume.pdf" })}
          >
            Download PDF
          </button>
        </Header>
        <Personal />
      </Information>
      <div className='cv-container' ref={targetRef}>
        <CV />
      </div>
    </div>
  )
}

export default Container
