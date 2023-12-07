import './ServiceDetail.css'

export default function ServiceDetail({classes,iClass ,h3Name ,pName }) {
  return (
    <div class={classes}>
        <i class={iClass}></i>
        <h3>{h3Name}</h3>
        <p>{pName}</p>
    </div>
  )
}
