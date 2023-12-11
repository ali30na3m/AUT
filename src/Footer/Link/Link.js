import React , {useState} from 'react'
import Footerlink from './Footerlink/Footerlink'
import List from './List/List'

export default function Link() {
  const [listTitle1 , setListTitl1] = useState([
    {title : 'Home'},
    {title : 'About Us'},
    {title : 'Services'},
    {title : 'Terms of services'},
    {title : 'privacy policy'},
  ])
  const [listTitle2 , setListTitle2] = useState([
    {title : 'Web Design'},
    {title : 'Web Development'},
    {title : 'Product Management'},
    {title : 'Marketing'},
    {title : 'Graphic Design'},
  ])

  const [headerLinks , setHeaderLinks] = useState([
    {titleHeader: 'Useful Links'},     
    {titleHeader: 'Our Services'}, 
  ])
  

  return (
    <div className="link">

        <Footerlink {...headerLinks[0]}>
          <ul className="useful-link">
            {
              listTitle1.map(item =>(
                <List {...item} />
              ))
            }
          </ul>
        </Footerlink>
        <Footerlink {...headerLinks[1]}>
          <ul className="useful-link">
          {
              listTitle2.map(item =>(
                <List {...item} />
              ))
            }
          </ul>
        </Footerlink>

    </div>
  )
}
