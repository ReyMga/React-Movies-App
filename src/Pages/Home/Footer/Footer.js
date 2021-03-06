import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import './Footer.css';


const Footer = () => {

    const { Footer } = Layout;

    return (
        <div>
            <Footer className="footer">
                <p className="texto">
                    Creado por Raquel Muriega y Silvina Sánchez
                </p>
            </Footer>
        </div>
    );
}

export default Footer;
