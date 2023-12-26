import { useEffect, useState } from "react"
import "../styles/EducationPreview.css"
import book from "../assets/open-book.png"

interface Information {
  school: string
  study: string
  startDate: string
  endDate: string
}

interface Education {
  education: Information
}

function EducationPreview(props: Education) {
  const [hasEducation, setHasEducation] = useState(false)
  const startDate = new Date(props.education.startDate)
  const endDate = new Date(props.education.endDate)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  const [startMonth, startYear] = [
    startDate.getMonth(),
    startDate.getFullYear(),
  ]
  const [endMonth, endYear] = [endDate.getMonth(), endDate.getFullYear()]

  useEffect(() => {
    if (
      props.education.school !== "" ||
      props.education.study !== "" ||
      props.education.endDate !== "" ||
      props.education.startDate !== ""
    ) {
      setHasEducation(true)
    }
  }, [props])

  return (
    <section className='education-preview'>
      {hasEducation && (
        <div className='details'>
          <header className='preview-header'>
            <h1>Education</h1>
            <img className='header-icon' src={book} alt='Open Book' />
          </header>
          <div className='add-details'>
            <div className='school-info'>
              <p>
                <b>{props.education.school}</b>
              </p>
              <p>{props.education.study}</p>
            </div>

            {!isNaN(startYear) ? (
              <p>
                {months[startMonth]} {startYear} - {months[endMonth]} {endYear}
              </p>
            ) : (
              !isNaN(endYear) && (
                <p>
                  {months[endMonth]} {endYear}
                </p>
              )
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default EducationPreview
