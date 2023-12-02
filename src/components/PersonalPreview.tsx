import "../styles/PersonalPreview.css"
import email from "../assets/email.png"
import date from "../assets/calendar.png"
import phone from "../assets/phone.png"

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
  const hasPersonal = props.personal

  return (
    <section className='personal-preview'>
      {hasPersonal && (
        <div className='details'>
          <h1>{props.personal.name}</h1>
          <div className='add-details'>
            <div className='info-box'>
              <img className='icon' src={email} alt='email' />
              <p>{props.personal.email}</p>
            </div>
            <div className='info-box'>
              <img className='icon' src={date} alt='date' />
              <p>{props.personal.birthday}</p>
            </div>
            <div className='info-box'>
              <img className='icon' src={phone} alt='phone' />
              <p>{props.personal.number}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PersonalPreview
