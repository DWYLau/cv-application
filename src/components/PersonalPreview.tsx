import "../styles/PersonalPreview.css"
import email from "../assets/email.png"
import date from "../assets/calendar.png"
import phone from "../assets/phone.png"
import user from "../assets/user.png"
import { useEffect, useState } from "react"

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
  const [hasPersonal, setHasPersonal] = useState(false)

  useEffect(() => {
    if (
      props.personal.name !== "" ||
      props.personal.birthday !== "" ||
      props.personal.email !== "" ||
      props.personal.number !== ""
    ) {
      setHasPersonal(true)
    }
  }, [props])

  return (
    <section className='personal-preview'>
      {hasPersonal && (
        <div className='details'>
          <header className='preview-header'>
            <h1>{props.personal.name}</h1>
            <img className='header-icon' src={user} alt='User' />
          </header>

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
