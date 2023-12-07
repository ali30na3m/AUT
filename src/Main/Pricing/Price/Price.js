import './Price.css'

export default function Price({titlePrice , price , desc1 , desc2 , desc3 , desc4 , desc5 , children}) {
  return (
    <div className="wrapper-price">

        <h2 className="title-price">{titlePrice}</h2>

        <div className="price-share">
            <span className="price-color">${price}</span><span>/ month</span>
        </div>

        <div className="desc-part1">
            <p>{desc1}</p>
            <p>{desc2}</p>
            <p>{desc3}</p>
        </div>

        <div className="desc-part2">
            <p>{desc4}</p>
            <p>{desc5}</p>
        </div>

        <button className="btn-price">BUY NOW</button>

        {children}
        
    </div>
  )
}
