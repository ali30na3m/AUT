import './Pricing.css'
import Price from './Price/Price'

export default function Pricing() {

    let priceInfo = [
        {titlePrice: 'Free' , price: 0 , desc1: 'Alda dere' , desc2:'Nec feugiat nisi' , desc3: 'Nulla at volupat dola' , desc4:'pharera massa' , desc5: 'massa ultricies mi'},
        {titlePrice: 'Buisness' , price: 19 , desc1: 'Alda dere' , desc2:'Nec feugiat nisi' , desc3: 'Nulla at volupat dola' , desc4:'pharera massa' , desc5: 'massa ultricies mi'},
        {titlePrice: 'Developer' , price: 29 , desc1: 'Alda dere' , desc2:'Nec feugiat nisi' , desc3: 'Nulla at volupat dola' , desc4:'pharera massa' , desc5: 'massa ultricies mi'},
        {titlePrice: 'Ultimate' , price: 49 , desc1: 'Alda dere' , desc2:'Nec feugiat nisi' , desc3: 'Nulla at volupat dola' , desc4:'pharera massa' , desc5: 'massa ultricies mi'},
    ]

  return (
    <section className="wrapper-color">
        <div className="container">
            <div className="header-pricing">
                <h1>Pricing</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus possimus similique. Nulla repellat id laudantium voluptas reprehenderit iste rerum ex ratione dignissimos? Amet, adipisci natus nihil esse culpa exercitationem nulla dolor rerum corporis dolores possimus doloribus odio iusto sed.
                </p>
            </div>
            <div className="prices">
                <Price {...priceInfo[0]}></Price>
                <Price {...priceInfo[1]}></Price>
                <Price {...priceInfo[2]}></Price>
                <Price {...priceInfo[3]}>
                    <div className='advaned-wrapper'>
                        <a href="#">Advanced</a>
                    </div>
                </Price>
            </div>
        </div>
    </section>
  )
}
