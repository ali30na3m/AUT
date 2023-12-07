import React from 'react'
import Footerlink from './Footerlink/Footerlink'
import List from './List/List'

export default function Link() {

  let listTitle = [
    {title : 'Home'},
    {title : 'About Us'},
    {title : 'Services'},
    {title : 'Terms of services'},
    {title : 'privacy policy'},
    {title : 'Web Design'},
    {title : 'Web Development'},
    {title : 'Product Management'},
    {title : 'Marketing'},
    {title : 'Graphic Design'},
  ]

  let headerLinks =[
    {titleHeader: 'Useful Links'},     
    {titleHeader: 'Our Services'},     
  ]
  

  return (
    <div className="link">

        <Footerlink {...headerLinks[0]}>
          <ul className="useful-link">
              <List {...listTitle[0]}></List>
              <List {...listTitle[1]}></List>
              <List {...listTitle[2]}></List>
              <List {...listTitle[3]}></List>
              <List {...listTitle[4]}></List>
          </ul>
        </Footerlink>
        <Footerlink {...headerLinks[1]}>
          <ul className="useful-link">
              <List {...listTitle[5]}></List>
              <List {...listTitle[6]}></List>
              <List {...listTitle[7]}></List>
              <List {...listTitle[8]}></List>
              <List {...listTitle[9]}></List>
          </ul>
        </Footerlink>

    </div>
  )
}
