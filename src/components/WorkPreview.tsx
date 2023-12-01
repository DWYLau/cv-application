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
              {props.work.startDate} - {props.work.endDate}
            </p>
          </div>
          <p className='description'>{props.work.description}</p>
        </div>
      )}
    </section>
  )
}

export default WorkPreview
