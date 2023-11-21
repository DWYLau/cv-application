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

interface InputData {
  (data: {
    school: string
    study: string
    startDate: string
    endDate: string
  }): void
}

interface EducationProps {
  receiveEducation: InputData
}

function Education({ receiveEducation }: EducationProps) {
  const [inputs, setInputs] = useState({
    school: "",
    study: "",
    startDate: "",
    endDate: "",
  })
  const [image, setImage] = useState(true)
  const [containerVisible, setContainerVisible] = useState(false)

  function handleChange(event: InputChangeEvent) {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(inputs)
  }

  function handleInput() {
    setContainerVisible(visible => !visible)
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
        {containerVisible && (
          <>
            <div className='input-box'>
              <input
                type='text'
                name='school'
                value={inputs.school || ""}
                onChange={handleChange}
                placeholder='Name of School'
              />

              <input
                type='text'
                name='study'
                value={inputs.study || ""}
                onChange={handleChange}
                placeholder='Name of Study'
              />
            </div>
            <div className='input-box'>
              <input
                type='date'
                name='startDate'
                value={inputs.startDate || ""}
                onChange={handleChange}
                placeholder='Start Date'
              />

              <input
                type='date'
                name='endDate'
                value={inputs.endDate || ""}
                onChange={handleChange}
                placeholder='End Date'
              />
            </div>
            <input
              onClick={() => receiveEducation(inputs)}
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
