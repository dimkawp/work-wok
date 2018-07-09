import React, { Component } from 'react';
//Semantic ui
import { Container } from 'semantic-ui-react';
//Css
import './Footer.css';
//Icons
import FaceBook from 'react-icons/lib/fa/facebook-official';
import Twitter from 'react-icons/lib/fa/twitter';
import Google from 'react-icons/lib/fa/google-plus-square';

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="footer">
                    <Container>
                        <div className="items">
                            <div className="socialBlock">
                                <FaceBook size={40}/>
                                <Twitter size={40}/>
                                <Google size={40}/>
                            </div>
                            <div className="mediaBlock">
                                <p>+38 <span>(067)</span>-931-17-45</p>
                                <span>elefantenko@gmail.com</span>
                            </div>
                            <div className="mapBlock">
                                googleMap
                            </div>
                        </div>
                    </Container>
                </div>
            </footer>
        );
    }
}

export default Footer;
