import React from 'react'

export default function Describe(props) {

    const clicked = (id) =>{
        return props.onClicked(id)
    }
  return (
    <div onClick={() => clicked(props.id)} class={`${props.color ? 'introduction-click' : 'introduction'}`}>

        <h3>{props.title}</h3>
        <p>{props.body}</p>

    </div>
  )
}
