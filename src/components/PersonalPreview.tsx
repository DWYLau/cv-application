import "../styles/PersonalPreview.css"

interface Information {
  name: string
  email: string
  birthday: string
  number: string
}

interface Personal {
  personal: Information
}

function PersonalPreview(props: Personal) {
  const canPreview = props.personal

  return (
    <section className='personal-preview'>
      {canPreview && (
        <div className='details'>
          <h1>{props.personal.name}</h1>
          <div className='add-details'>
            <p>{props.personal.email}</p>
            <p>{props.personal.birthday}</p>
            <p>{props.personal.number}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default PersonalPreview
