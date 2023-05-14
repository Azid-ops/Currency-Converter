//Importing Packages
import React from "react";

//Importing Files
import Aux from "../../Auxiliary/auxiliary";

//Importing Images
import Logo from '../../assets/logo/log.png';

//Importing Css
import './footer.css';

const FooterPage = () => {
    return(
        <Aux>
            <section className="footer__outer__main__section">
                <div>
                    <img className="icca__logo" src={Logo} alt="" />
                </div>
                <div className="developer__details">
                    <p>Developed By:Mahad Ali Awan (www.github.com/Azid-ops)</p>
                </div>
            </section>
        </Aux>
    )
}

export default FooterPage;