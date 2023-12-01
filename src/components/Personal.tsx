import "../styles/Personal.css"
import maximize from "../assets/maximize.png"
import minimize from "../assets/minimize.png"
import { useState, ChangeEvent } from "react"

interface InputChangeEvent extends ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    name: string
    value: string
  }
}

interface Data {
  (data: {
    name: string
    birthday: string
    email: string
    number: string
  }): void
}

interface PersonalProps {
  getPersonal: Data
}

function Personal({ getPersonal }: PersonalProps) {
  const [inputs, setInputs] = useState({
    name: "",
    birthday: "",
    email: "",
    number: "",
  })
  const [image, setImage] = useState(true)
  const [formVisible, setFormVisible] = useState(false)

  function handleChange(event: InputChangeEvent) {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function showForm() {
    setFormVisible(visible => !visible)
    setImage(maximize => !maximize)
  }

  return (
    <section>
      <header className='title'>
        <h1>Personal Details</h1>
        {image ? (
          <img onClick={showForm} src={maximize} alt='maximize' />
        ) : (
          <img onClick={showForm} src={minimize} alt='minimize' />
        )}
      </header>
      <form id='personal' onSubmit={handleSubmit}>
        {formVisible && (
          <>
            <div className='input-box'>
              <div className='input'>
                <label htmlFor='name'>Full Name</label>
                <input
                  id='name'
                  type='text'
                  name='name'
                  value={inputs.name || ""}
                  onChange={handleChange}
                  placeholder='Name'
                  required
                />
              </div>

              <div className='input'>
                <label htmlFor='birth-date'>Birth Date</label>
                <input
                  id='birth-date'
                  type='date'
                  name='birthday'
                  value={inputs.birthday || ""}
                  onChange={handleChange}
                  placeholder='Birth Date'
                  required
                />
              </div>
            </div>

            <div className='input-box'>
              <div className='input'>
                <label htmlFor='email'>Email Address</label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  value={inputs.email || ""}
                  onChange={handleChange}
                  placeholder='Email'
                  required
                />
              </div>

              <div className='input'>
                <label htmlFor='number'>Phone Number</label>
                <input
                  id='number'
                  type='tel'
                  name='number'
                  value={inputs.number || ""}
                  onChange={handleChange}
                  placeholder='Phone Number'
                  maxLength={15}
                  required
                />
              </div>
            </div>
            <input
              onClick={() => getPersonal(inputs)}
              type='submit'
              value='Submit'
              className='button'
            />
          </>
        )}
      </form>
    </section>
  )
}

export default Personal
