import "../styles/Additional.css"
import { ChangeEvent, useState, useEffect } from "react"
import maximize from "../assets/maximize.png"
import minimize from "../assets/minimize.png"

interface InputChangeEvent extends ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    name: string
    value: string
  }
}

interface AdditionalProps {
  getAdditional: (information: { id: number; value: string }[]) => void
}

interface AdditionalInfo {
  id: number
  value: string
}

function Additional({ getAdditional }: AdditionalProps) {
  const [inputValue, setInputValue] = useState("")
  const [inputs, setInputs] = useState<AdditionalInfo[]>([])
  const [nextID, setNextID] = useState(0)
  const [image, setImage] = useState(true)
  const [formVisible, setFormVisible] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [hasInputs, setHasInputs] = useState(false)
  const [editing, isEditing] = useState(false)

  useEffect(() => {
    getAdditional(inputs)
    console.log(inputs)
    if (inputs.length >= 5) {
      setHasError(true)
    } else if (inputs.length > 0) {
      setHasInputs(true)
      setHasError(false)
    }
  }, [inputs, getAdditional])

  function handleChange(event: InputChangeEvent) {
    const value = event.target.value
    setInputValue(value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function handleAdd() {
    if (inputValue.trim() !== "" && inputs.length < 5) {
      const newInput: AdditionalInfo = { id: nextID, value: inputValue }
      setInputs(prevInputs => [...prevInputs, newInput])
      setInputValue("")
      setNextID(prevID => prevID + 1)
    }
  }

  function handleReset() {
    setInputs([])
    setNextID(0)
    setHasInputs(false)
    setHasError(false)
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
              {hasError && (
                <p className='error'>
                  Reached max limit, please reset if you want to change
                </p>
              )}
              <input
                id='extra'
                name='extra'
                type='text'
                maxLength={40}
                value={inputValue}
                placeholder='Add Extra Information'
                onChange={handleChange}
              />
            </div>
            {hasInputs && (
              <ol className='input-display'>
                {inputs.map(input => {
                  return (
                    <div className='input-container'>
                      <li key={input.id}>{input.value}</li>
                      {!editing && (
                        <button className='edit-button'>Edit</button>
                      )}
                      <button className='delete-button'>Del</button>
                    </div>
                  )
                })}
              </ol>
            )}
            <div className='button-box'>
              <button
                onClick={() => {
                  handleAdd()
                  getAdditional(inputs)
                }}
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
