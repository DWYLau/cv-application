import "../styles/PersonalPreview.css"

function PersonalPreview(props) {
  const canPreview = props.personal

  return (
    <section className='personal-preview'>
      <h1>Personal</h1>
      {canPreview && (
        <div className='info'>
          <p>{props.personal.name}</p>
          <p>{props.personal.email}</p>
          <p>{props.personal.date}</p>
          <p>{props.personal.number}</p>
        </div>
      )}
    </section>
  )
}

export default PersonalPreview
