import "../styles/EducationPreview.css"

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
  const hasEducation = props.education
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

  return (
    <section className='education-preview'>
      {hasEducation && (
        <div className='details'>
          <h1>Education</h1>
          <div className='add-details'>
            <div className='school-info'>
              <p>
                <b>{props.education.school}</b>
              </p>
              <p>{props.education.study}</p>
            </div>
            <p>
              {months[startMonth]} {startYear} - {months[endMonth]} {endYear}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default EducationPreview
