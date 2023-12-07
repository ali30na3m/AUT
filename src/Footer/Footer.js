import './Footer.css'
import Info from './Info/Info';
import Link from './Link/Link';
import Email from './Email/Email';

function Footer () {
    return (
        <footer>
            <div className="container wrapper-f">
                
                <div className="info-link">
                    <Info></Info>
                    <Link></Link>
                </div>

                <Email></Email>
                
            </div>

            <div className="copy-right">
                <div className="container wrapper-copy-right">
                    <span>DESIGN BY ALI30NA3M</span>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer