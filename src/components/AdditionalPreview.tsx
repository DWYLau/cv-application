import "../styles/AdditionalPreview.css"

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
        <>
          <h1>Additional Info</h1>
          <ul>
            <ul>
              {props.additional?.map(info => {
                return <li key={info.id}>{info.value}</li>
              })}
            </ul>
          </ul>
        </>
      )}
    </section>
  )
}

export default AdditionalPreview
