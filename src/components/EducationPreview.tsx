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
          <div className='add-details'>
            <p>{props.education.school}</p>
            <p>{props.education.study}</p>
            <p>{props.education.startDate}</p>
            <p>{props.education.endDate}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default EducationPreview
