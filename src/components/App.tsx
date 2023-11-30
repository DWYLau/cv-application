import "../styles/App.css"
import { useState, useRef } from "react"
import download from "../assets/download.svg"
import generatePDF, { Margin } from "react-to-pdf"
import Information from "./Information"
import Header from "./Header"
import Personal from "./Personal"
import Education from "./Education"
import Work from "./Work"
import Additional from "./Additional"
import PersonalPreview from "./PersonalPreview"
import EducationPreview from "./EducationPreview"
import WorkPreview from "./WorkPreview"
import AdditionalPreview from "./AdditionalPreview"

interface Personal {
  name: string
  birthday: string
  email: string
  number: string
}

interface Education {
  school: string
  study: string
  startDate: string
  endDate: string
}

interface Work {
  company: string
  position: string
  description: string
  startDate: string
  endDate: string
}

interface Additional {
  id: number
  value: string
}

function App() {
  const [personal, setPersonal] = useState<Personal | null>(null)
  const [education, setEducation] = useState<Education | null>(null)
  const [work, setWork] = useState<Work | null>(null)
  const [additional, setAdditional] = useState<Additional[] | null>(null)

  function getPersonal(information: Personal) {
    setPersonal(information)
  }

  function getEducation(information: Education) {
    setEducation(information)
  }

  function getWork(information: Work) {
    setWork(information)
  }

  function getAdditional(information: Additional[]) {
    setAdditional(information)
    console.log("INFORMATION IS", information)
    console.log(additional)
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
        <Personal getPersonal={getPersonal} />
        <Education getEducation={getEducation} />
        <Work getWork={getWork} />
        <Additional getAdditional={getAdditional} />
      </Information>
      <div className='cv-preview' ref={targetRef}>
        {personal ? <PersonalPreview personal={personal} /> : null}
        {education ? <EducationPreview education={education} /> : null}
        {work ? <WorkPreview work={work} /> : null}
        {additional ? <AdditionalPreview additional={additional} /> : null}
      </div>
    </div>
  )
}

export default App
