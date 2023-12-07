import React from 'react'

export default function InputTags({className,totalClass,innerTag,typeOfInpt,classNameInpts}) {
  return (
    <div className={className}>
        <label htmlFor={totalClass}>{innerTag}</label>
        <input type={typeOfInpt} className={classNameInpts} name={totalClass} id={totalClass} />
    </div>
  )
}
