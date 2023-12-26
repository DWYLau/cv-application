import { useEffect, useState } from "react"
import "../styles/WorkPreview.css"
import work from "../assets/portfolio.png"

interface Information {
  company: string
  position: string
  description: string
  startDate: string
  endDate: string
}

interface Work {
  work: Information
}

function WorkPreview(props: Work) {
  const [hasWork, setHasWork] = useState(false)
  const startDate = new Date(props.work.startDate)
  const endDate = new Date(props.work.endDate)
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
      props.work.company !== "" ||
      props.work.description !== "" ||
      props.work.endDate !== "" ||
      props.work.position !== "" ||
      props.work.startDate !== ""
    ) {
      setHasWork(true)
    }
  }, [props])

  return (
    <section className='work-preview'>
      {hasWork && (
        <div className='details'>
          <header className='preview-header'>
            <h1>Work</h1>
            <img className='header-icon' src={work} alt='Bag' />
          </header>
          <div className='add-details'>
            <div className='work-info'>
              <p>
                <b>{props.work.company}</b>
              </p>
              <p>{props.work.position}</p>
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
          <p className='description'>{props.work.description}</p>
        </div>
      )}
    </section>
  )
}

export default WorkPreview
