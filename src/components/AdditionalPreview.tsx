interface AdditionalProps {
  additional: { id: number; value: string }[] | null
}

function AdditionalPreview(props: AdditionalProps) {
  const hasAdditional = props.additional

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default AdditionalPreview
