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

type GetAdditional = (information: { id: number; value: string }[]) => void

interface AdditionalProps {
  getAdditional: GetAdditional
}

function Additional({ getAdditional }: AdditionalProps) {
  const [inputValue, setInputValue] = useState("")
  const [inputs, setInputs] = useState<{ id: number; value: string }[]>([])
  const [nextID, setNextID] = useState(0)
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
    if (inputValue !== "") {
      const newInput = { id: nextID, value: inputValue }
      setInputs(prevInputs => [...prevInputs, newInput])
      setInputValue("")
      setNextID(prevID => prevID + 1)
      getAdditional(inputs)
    }
  }

  function handleReset() {
    setInputs([])
    setNextID(0)
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
              <button
                onClick={handleReset}
                type='reset'
                value='Reset'
                className='button'
              >
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
