import '../Head/Head.css'
function Head () {
    return (
        <header>
            <div class="wrapper">

                <div class="left">AUT</div>

                <div class="right">
                    
                    <div className='icons-header'>
                        <i class="icofont-twitter"></i>
                        <i class="icofont-facebook"></i>
                        <i class="icofont-instagram"></i>
                        <i class="icofont-linkedin"></i>
                    </div>

                    <ul class="ul-list">
                        <li><a href="#home" title="home">HOME</a></li>
                        <li><a href="#about" title="About">About</a></li>
                        <li><a href="#services" title="Services">Services</a></li>
                        <li><a href="#portfolio" title="portfolio">portfolio</a></li>
                        <li><a href="#pricing" title="pricing">pricing</a></li>
                        <li><a href="#contact" title="contact">contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
  
export default Head