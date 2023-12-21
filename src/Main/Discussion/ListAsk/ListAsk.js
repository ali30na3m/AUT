import React, { useState } from 'react'

export default function ListAsk(props) {

  const [isShow, setisShow] = useState(false)

  return (
    <div>
      <li onClick={() => setisShow(setPrev => !setPrev)} className="list-ask">
        <div

        >
          {
            isShow ? (

              <svg className='chevron-up' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" dataSlot="icon">
                <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
              </svg>

            ) : (
              <svg className="chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            )
          }
        </div>
        <div
          className={`${isShow ? 'highlightDesc' : '' }`}
        >

          {props.title}
        </div>

      </li >

      <div>
          {
            isShow && <p className='handleDesc'>{props.desc}</p>
          }
      </div>

    </div>
  )
}
