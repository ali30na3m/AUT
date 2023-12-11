import React , {useState} from "react"
import './imgFeature.css'

export default function ImgFeatures(drop) {
  
  return (
    <div className="img-feature">
      <img src={drop.src} />
    </div>
  )
}
