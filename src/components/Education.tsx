import "../styles/Education.css"
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
    school: string
    study: string
    startDate: string
    endDate: string
  }): void
}

interface EducationProps {
  getEducation: Data
}

function Education({ getEducation }: EducationProps) {
  const [inputs, setInputs] = useState({
    school: "",
    study: "",
    startDate: "",
    endDate: "",
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

  function handleInput() {
    setFormVisible(visible => !visible)
    setImage(maximize => !maximize)
  }

  return (
    <section>
      <header className='title'>
        <h1>Education Details</h1>
        {image ? (
          <img onClick={handleInput} src={maximize} alt='maximize' />
        ) : (
          <img onClick={handleInput} src={minimize} alt='minimize' />
        )}
      </header>
      <form id='education' onSubmit={handleSubmit}>
        {formVisible && (
          <>
            <div className='input-box'>
              <div className='input'>
                <label htmlFor='school'>Name of School</label>
                <input
                  type='text'
                  name='school'
                  value={inputs.school || ""}
                  onChange={handleChange}
                  placeholder='School'
                />
              </div>
              <div className='input'>
                <label htmlFor='study'>Name of Study</label>
                <input
                  type='text'
                  name='study'
                  value={inputs.study || ""}
                  onChange={handleChange}
                  placeholder='Study'
                />
              </div>
            </div>

            <div className='input-box'>
              <div className='input'>
                <label htmlFor='startDate'>Start Date</label>
                <input
                  type='date'
                  name='startDate'
                  value={inputs.startDate || ""}
                  onChange={handleChange}
                  placeholder='Start Date'
                />
              </div>

              <div className='input'>
                <label htmlFor='endDate'>End Date</label>
                <input
                  type='date'
                  name='endDate'
                  value={inputs.endDate || ""}
                  onChange={handleChange}
                  placeholder='End Date'
                />
              </div>
            </div>
            <input
              onClick={() => getEducation(inputs)}
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

export default Education
