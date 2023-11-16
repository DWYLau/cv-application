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

function Personal() {
  const [inputs, setInputs] = useState({ name: "", age: "" })
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
        <h1>Personal Details</h1>
        {image ? (
          <img onClick={handleInput} src={maximize} alt='maximize' />
        ) : (
          <img onClick={handleInput} src={minimize} alt='minimize' />
        )}
      </header>
      <form onSubmit={handleSubmit}>
        {containerVisible && (
          <div className='input-container'>
            <label>Enter your name</label>
            <input
              type='text'
              name='name'
              value={inputs.name || ""}
              onChange={handleChange}
              placeholder='name'
            />
            <label>Age</label>
            <input
              type='number'
              name='age'
              value={inputs.age || ""}
              onChange={handleChange}
              placeholder='age'
            />
            <button type='submit'>CLICK</button>
          </div>
        )}
      </form>
    </section>
  )
}

export default Personal
