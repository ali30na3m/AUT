import React from 'react'
import './Email.css'

export default function Email() {
  return (
    <div className="contact-email">
        <h2>Our newsletter</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi at quos impedit!</p>
        <div className="email-subscribe">
            <input type="email"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
