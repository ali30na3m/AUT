import './Portfolio.css'
import Product from './Product/Product';

function Porfolio () {

    let AllPortfolios = [
        {id:1 , src:"img/portfolio/portfolio-1.jpg" , h3Name:"APP" , spanName:"App 1"},
        {id:2 , src:"img/portfolio/portfolio-2.jpg" , h3Name:"APP" , spanName:"App 2"},
        {id:3 , src:"img/portfolio/portfolio-3.jpg" , h3Name:"APP" , spanName:"App 3"},
        {id:4 , src:"img/portfolio/portfolio-4.jpg" , h3Name:"APP" , spanName:"App 4"},
        {id:5 , src:"img/portfolio/portfolio-5.jpg" , h3Name:"APP" , spanName:"App 5"},
        {id:6 , src:"img/portfolio/portfolio-6.jpg" , h3Name:"APP" , spanName:"App 6"},
        {id:7 , src:"img/portfolio/portfolio-7.jpg" , h3Name:"APP" , spanName:"App 7"},
        {id:8 , src:"img/portfolio/portfolio-8.jpg" , h3Name:"APP" , spanName:"App 8"},
        {id:9 , src:"img/portfolio/portfolio-9.jpg" , h3Name:"APP" , spanName:"App 9"},
    ]


    return (
        <section>
            <div class="container">
                <div class="header-portfolio">
                    <h2>portfolio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean
                     vel elit scelerisque In egestas erat imperdiet
                     sed euismod nisi porta lorem mollis Morbi tristique senectus</p>
                </div>
                <ul class="row-portfolio">
                    <li>ALL</li>
                    <li>APP</li>
                    <li>CARD</li>
                    <li>WEB</li>
                </ul>
                <div class="products">
                    
                    <Product {...AllPortfolios[0]}></Product>
                    <Product {...AllPortfolios[1]}></Product>
                    <Product {...AllPortfolios[2]}></Product>
                    <Product {...AllPortfolios[3]}></Product>
                    <Product {...AllPortfolios[4]}></Product>
                    <Product {...AllPortfolios[5]}></Product>
                    <Product {...AllPortfolios[6]}></Product>
                    <Product {...AllPortfolios[7]}></Product>
                    <Product {...AllPortfolios[8]}></Product>
                    
                </div>
            </div>
        </section>
    );
}


export default Porfolio