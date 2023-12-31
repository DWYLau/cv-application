import "../styles/Work.css"
import { useState, ChangeEvent } from "react"
import maximize from "../assets/maximize.png"
import minimize from "../assets/minimize.png"

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

    if (name === "startDate") {
      if (value > inputs.endDate) {
        setInputs(prevInputs => ({
          ...prevInputs,
          endDate: value,
        }))
      }
    }
    if (name === "endDate") {
      if (value < inputs.startDate) {
        setInputs(prevInputs => ({
          ...prevInputs,
          startDate: value,
        }))
      }
    }
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
        <h1>Work Details</h1>
        {image ? (
          <img onClick={showForm} src={maximize} alt='maximize' />
        ) : (
          <img onClick={showForm} src={minimize} alt='minimize' />
        )}
      </header>
      <form id='work' onSubmit={handleSubmit}>
        {formVisible && (
          <>
            <div className='input-box'>
              <div className='input'>
                <label htmlFor='company'>Company</label>
                <input
                  id='company'
                  type='text'
                  name='company'
                  value={inputs.company || ""}
                  onChange={handleChange}
                  placeholder='Name'
                  required
                />
              </div>

              <div className='input'>
                <label htmlFor='position'>Position Title</label>
                <input
                  id='position'
                  type='text'
                  name='position'
                  value={inputs.position || ""}
                  onChange={handleChange}
                  placeholder='Position'
                  required
                />
              </div>
            </div>
            <div className='input-box'>
              <div className='input'>
                <label htmlFor='startDate'>Start Date</label>
                <input
                  id='startDate'
                  type='date'
                  name='startDate'
                  value={inputs.startDate || ""}
                  onChange={handleChange}
                  placeholder='Start Date'
                  required
                />
              </div>

              <div className='input'>
                <label htmlFor='endDate'>End Date</label>
                <input
                  id='endDate'
                  type='date'
                  name='endDate'
                  value={inputs.endDate || ""}
                  min={inputs.startDate}
                  onChange={handleChange}
                  placeholder='End Date'
                  required
                />
              </div>
            </div>
            <div className='add-inputs'>
              <label htmlFor='description'>Summary</label>
              <textarea
                id='description'
                name='description'
                value={inputs.description}
                onChange={handleChange}
                required
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
