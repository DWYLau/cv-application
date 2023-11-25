import maximize from "../assets/maximize.png"
import minimize from "../assets/minimize.png"
import { useState, ChangeEvent } from "react"
import "../styles/Work.css"

interface Data {
  (data: {
    company: string
    position: string
    description: string
    startDate: string
    endDate: string
  }): void
}

interface WorkProps {
  getWork: Data
}

function Work({ getWork }: WorkProps) {
  const [inputs, setInputs] = useState({
    company: "",
    position: "",
    description: "",
    startDate: "",
    endDate: "",
  })
  const [image, setImage] = useState(true)
  const [formVisible, setFormVisible] = useState(false)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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
        <h1>Work Details</h1>
        {image ? (
          <img onClick={handleInput} src={maximize} alt='maximize' />
        ) : (
          <img onClick={handleInput} src={minimize} alt='minimize' />
        )}
      </header>
      <form id='work' onSubmit={handleSubmit}>
        {formVisible && (
          <>
            <div className='input-box'>
              <div className='input'>
                <label htmlFor='company'>Company</label>
                <input
                  type='text'
                  name='company'
                  value={inputs.company || ""}
                  onChange={handleChange}
                  placeholder='Name'
                />
              </div>

              <div className='input'>
                <label htmlFor='position'>Position Title</label>
                <input
                  type='text'
                  name='position'
                  value={inputs.position || ""}
                  onChange={handleChange}
                  placeholder='Position'
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
            <div className='add-inputs'>
              <textarea
                name='description'
                value={inputs.description}
                onChange={handleChange}
              ></textarea>

              <input
                onClick={() => getWork(inputs)}
                type='submit'
                value='Submit'
                className='button'
              />
            </div>
          </>
        )}
      </form>
    </section>
  )
}

export default Work
