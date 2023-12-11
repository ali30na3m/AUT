import React , {useState} from 'react'

export default function Describe(props) {

  let [isClick , setIsClick] = useState('')
    const clicked = (id) =>{
        setIsClick('introduction-click') 
        return props.onClicked(id)
    }
  return (
    <div onClick={() => clicked(props.id)} class={`introduction ${isClick ? 'introduction-click' : ''}`}>

        <h3>{props.title}</h3>
        <p>{props.body}</p>

    </div>
  )
}
