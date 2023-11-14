interface ButtonProps {
  onclick: () => void
  children: React.ReactNode
}

function Button(props: ButtonProps) {
  return (
    <button className='button' {...props}>
      {" "}
      Download PDF{" "}
    </button>
  )
}

export default Button
