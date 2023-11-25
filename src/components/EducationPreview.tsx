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
  const canPreview = props.education

  return (
    <section className='education-preview'>
      {canPreview && (
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
              {props.education.startDate} - {props.education.endDate}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default EducationPreview
