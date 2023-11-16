import { useState, ChangeEvent } from "react"

interface InputChangeEvent extends ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    name: string
    value: string
  }
}

function Personal() {
  const [inputs, setInputs] = useState({ name: "", age: "" })

  function handleChange(event: InputChangeEvent) {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(inputs)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Personal</h1>
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
        <input type='submit' />
      </div>
    </form>
  )
}

export default Personal
