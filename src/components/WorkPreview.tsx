import "../styles/WorkPreview.css"

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
  const hasWork = props.work
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

  return (
    <section className='work-preview'>
      {hasWork && (
        <div className='details'>
          <h1>Experience</h1>
          <div className='add-details'>
            <div className='work-info'>
              <p>
                <b>{props.work.company}</b>
              </p>
              <p>{props.work.position}</p>
            </div>
            <p>
              {months[startMonth]} {startYear}- {months[endMonth]} {endYear}
            </p>
          </div>
          <p className='description'>{props.work.description}</p>
        </div>
      )}
    </section>
  )
}

export default WorkPreview
