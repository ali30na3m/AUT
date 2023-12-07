import './Services.css'
import ServiceDetail from './ServiceDetail/ServiceDetail';

function Services () {
    return(
        <section>
            <div class="service">
                <div class="container services">
                    <h2>Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi</p>
                </div>
                <div class="container int-ser">
                    <ServiceDetail classes="c1 service-detail" iClass="bx bxl-dribbble" h3Name="lorem ipsum" pName="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus volupt"></ServiceDetail>
                    <ServiceDetail classes="c2 service-detail" iClass="bx bx-file" h3Name="lorem ipsum" pName="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus volupt"></ServiceDetail>
                    <ServiceDetail classes="c3 service-detail" iClass="bx bx-tachometer" h3Name="lorem ipsum" pName="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus volupt"></ServiceDetail>
                    <ServiceDetail classes="c4 service-detail" iClass="bx bx-world" h3Name="lorem ipsum" pName="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus volupt"></ServiceDetail>
                </div>
            </div>
        </section>
    );
}

export default Services