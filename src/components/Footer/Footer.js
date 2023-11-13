import React from "react";
import facebook from "../../assets/images/footer/fb.png";
import twitter from "../../assets/images/footer/twitter.png";
import youtube from "../../assets/images/footer/youtube.png";
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css';

const footer = (props) => (
    <footer className="bg-primary text-white text-center p-2">
        <div className="container">
            <div className="row align-items-center">
                {/* Logos sociaux en utilisant flex pour les écrans medium et supérieurs */}
                <div className="col-md d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
                    <a href="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="facebook" className="img-fluid" style={{ maxWidth: '50px', height: 'auto' }} />
                    </a>
                    <a href="https://twitter.com/" className="d-block mx-3" target="_blank" rel="noreferrer">
                        <img src={twitter} alt="twitter" className="img-fluid" style={{ maxWidth: '50px', height: 'auto' }} />
                    </a>
                    <a href="https://www.youtube.com/" className="d-block" target="_blank" rel="noreferrer">
                        <img src={youtube} alt="youtube" className="img-fluid" style={{ maxWidth: '50px', height: 'auto' }} />
                    </a>
                </div>
                {/* Mentions légales et contact en utilisant flex pour les écrans medium et supérieurs */}
                <div className="col-md d-flex justify-content-center justify-content-md-end">
                    <NavLink
                        to="/mentions-legales"

                        activeClassName="active"
                        className={`nav-link p-0 m-0 ${classes.p_footerLink}`}
                    >
                        Mentions légales
                    </NavLink>
                    <a href="mailto:contact@myzoo.com" className={`nav-link p-0 m-0 mx-3 ${classes.p_footerLink}`}>
                        contact@myzoo.com
                    </a>
                </div>
            </div>
            <div className="text-center mt-2">
                MyZOO - Tous droits réservés - 2023
            </div>
        </div>
    </footer>
);

export default footer;
