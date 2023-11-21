import "../styles/Container.css"
import { useState, useRef } from "react"
import download from "../assets/download.svg"
import generatePDF, { Margin } from "react-to-pdf"
import Information from "./Information"
import Header from "./Header"
import Personal from "./Personal"
import PersonalPreview from "./PersonalPreview"

interface Information {
  name: string
  date: string
  email: string
  number: string
}

function Container() {
  const [data, setData] = useState<Information | null>(null)

  function childToParent(information: Information) {
    setData(information)
    console.log("DATA IS", data)
  }
  const targetRef = useRef(null)

  return (
    <div className='container'>
      <Information>
        <Header>
          <button
            onClick={() =>
              generatePDF(targetRef, {
                method: "open",
                page: { margin: Margin.MEDIUM },
              })
            }
          >
            {" "}
            <img src={download} alt='download' />
            Download
          </button>
        </Header>
        <Personal childToParent={childToParent} />
      </Information>
      <div className='cv-preview' ref={targetRef}>
        <PersonalPreview personal={data} />
      </div>
    </div>
  )
}

export default Container
