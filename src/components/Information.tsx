import "../styles/Information.css"

interface InformationProps {
  children: React.ReactNode
}

function Information({ children }: InformationProps) {
  return <div className='information'>{children}</div>
}

export default Information
