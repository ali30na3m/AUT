import { useState } from 'react'
import ListAsk from './ListAsk/ListAsk'
import { Question } from '../../data'

import './Discussion.css'

export default function Discussion() {

  const [handleQuestion , setHandleQuestion] = useState(Question)
  
  return (
    <div className="container AQ">
        <h2 className="header-AQ">Frequently Asked Question</h2>

        <ul className="Ask">
            {
              handleQuestion.map(item => (
                <ListAsk key={item.id} {...item} />
              ))
            }
        </ul>

    </div>
  )
}
