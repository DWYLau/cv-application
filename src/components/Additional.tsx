import "../styles/Additional.css"
import { ChangeEvent, useState } from "react"
import maximize from "../assets/maximize.png"
import minimize from "../assets/minimize.png"

interface InputChangeEvent extends ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    name: string
    value: string
  }
}

function Additional() {
  const [inputValue, setInputValue] = useState("")
  const [inputs, setInputs] = useState<string[]>([])
  const [image, setImage] = useState(true)
  const [formVisible, setFormVisible] = useState(false)

  function handleChange(event: InputChangeEvent) {
    const value = event.target.value
    setInputValue(value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(inputs)
  }

  function handleAdd() {
    setInputs(prevInputs => [...prevInputs, inputValue])
    setInputValue("")
  }

  function showForm() {
    setFormVisible(visible => !visible)
    setImage(maximize => !maximize)
  }

  return (
    <section>
      <header className='title'>
        <h1>Additional Information</h1>
        {image ? (
          <img src={maximize} alt='maximize' onClick={showForm} />
        ) : (
          <img src={minimize} alt='minimize' onClick={showForm} />
        )}
      </header>
      <form id='additional' onSubmit={handleSubmit}>
        {formVisible && (
          <>
            <div className='input-box'>
              <label htmlFor='extra'>Add Extra Information</label>
              <input
                id='extra'
                name='extra'
                type='text'
                value={inputValue}
                placeholder='Add Extra Information'
                onChange={handleChange}
              />
            </div>
            <div className='button-box'>
              <button
                onClick={handleAdd}
                type='submit'
                value='Submit'
                className='button'
              >
                Add
              </button>
              <button type='reset' value='Reset' className='button'>
                Reset
              </button>
            </div>
          </>
        )}
      </form>
    </section>
  )
}

export default Additional
