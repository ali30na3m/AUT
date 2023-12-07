import '../Main/Main.css';
import HeadSite from './HeadSite/HeadSite.js';
import AboutUs from './AboutUs/AboutUs.js';
import Introduction from './Introduction/Introduction.js';
import Services from './Services/Services.js';
import Porfolio from './Portfolio/Portfolio.js';
import CallToAction from './CallToAction/CallToAction.js';
import Testimonials from './Testimonials/Testimonials.js';
import Team from './Team/Team.js';
import Client from './Client/Client.js';
import Pricing from './Pricing/Pricing.js';
import Discussion from './Discussion/Discussion.js';
import ContactUs from './ContactUs/ContactUs.js';


function Main () {
    return (
        <>
        <HeadSite></HeadSite>
        <AboutUs></AboutUs>
        <Introduction></Introduction>
        <Services></Services>
        <Porfolio></Porfolio>
        <CallToAction></CallToAction>
        <Testimonials></Testimonials>
        <Team></Team>
        <Client></Client>
        <Pricing></Pricing>
        <Discussion></Discussion>
        <ContactUs></ContactUs>
        </> 
    );
}

 

export default Main