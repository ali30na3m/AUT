import { useEffect, useState } from 'react';
import Product from './Product/Product';
import Category from './Category/Category';
import { porfolio } from '../../data';

import './Portfolio.css'


const allCategories = ['All', ...new Set(porfolio.map(item => item.category))]

function Porfolio() {

    const [AllPortfolios, setAllPortfolios] = useState(porfolio)


    const filteredCategories = (category) => {
        if (category == 'All') {
            setAllPortfolios(porfolio)
            return
        }

        let filtered = porfolio.filter(item => item.category === category)
        setAllPortfolios(filtered)
    }

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

                    <Category filteredCategories={filteredCategories} allCategories={allCategories} />

                </ul>
                <div class="products">

                    {
                        AllPortfolios.map(porfolio => (
                            <Product key={porfolio.id} {...porfolio} />
                        ))
                    }

                </div>
            </div>
        </section>
    );
}


export default Porfolio