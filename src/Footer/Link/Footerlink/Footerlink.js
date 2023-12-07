import React, { Children } from 'react'
import List from '../List/List'

export default function Footerlink({titleHeader , children}) {

  return (
    <div>
        <h3>{titleHeader}</h3>
        {children}
    </div>
  )
}
