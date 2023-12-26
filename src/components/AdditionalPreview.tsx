import "../styles/AdditionalPreview.css"
import info from "../assets/information-button.png"

interface Additional {
  additional: { id: number; value: string }[] | null
}

function AdditionalPreview(props: Additional) {
  const hasAdditional =
    props.additional &&
    props.additional.length > 0 &&
    props.additional.length < 6

  return (
    <section className='additional-preview'>
      {hasAdditional && (
        <div className='details'>
          <header className='preview-header'>
            <h1>Additional Info</h1>
            <img className='header-icon' src={info} alt='Information' />
          </header>
          <ul>
            <ul>
              {props.additional?.map(info => {
                return <li key={info.id}>{info.value}</li>
              })}
            </ul>
          </ul>
        </div>
      )}
    </section>
  )
}

export default AdditionalPreview
