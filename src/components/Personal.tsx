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

interface ChildToParentFunction {
  (data: { name: string; date: string; email: string; number: string }): void
}

interface PersonalProps {
  childToParent: ChildToParentFunction
}

function Personal({ childToParent }: PersonalProps) {
  const [inputs, setInputs] = useState({
    name: "",
    date: "",
    email: "",
    number: "",
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
        <h1>Personal Details</h1>
        {image ? (
          <img onClick={handleInput} src={maximize} alt='maximize' />
        ) : (
          <img onClick={handleInput} src={minimize} alt='minimize' />
        )}
      </header>
      <form id='personal' onSubmit={handleSubmit}>
        {containerVisible && (
          <>
            <div className='input-box'>
              <input
                type='text'
                name='name'
                value={inputs.name || ""}
                onChange={handleChange}
                placeholder='Name'
              />

              <input
                type='date'
                name='date'
                value={inputs.date || ""}
                onChange={handleChange}
                placeholder='Birth Date'
              />
            </div>
            <div className='input-box'>
              <input
                type='email'
                name='email'
                value={inputs.email || ""}
                onChange={handleChange}
                placeholder='Email'
              />

              <input
                type='tel'
                name='number'
                value={inputs.number || ""}
                onChange={handleChange}
                placeholder='Phone Number'
              />
            </div>
            <input
              onClick={() => childToParent(inputs)}
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
