import React from "react";
import logo from "../../../assets/images/logomyzoo.png";
import {NavLink} from "react-router-dom";

const navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo My zoo" width={"50px"} className={"rounded"} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            { /* navlink me permet de faire un lien vers une autre page sans recharger la page*/}
                            <NavLink to="/"  activeClassName="active" className="nav-link">Accueil</NavLink>
                                <span className="visually-hidden">(current)</span>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/animaux" activeClassName="active" className="nav-link">Les animaux du parc</NavLink>
                            <span className="visually-hidden">(current)</span>

                        </li>

                    </ul>

                </div>
                <a className="btn btn-success" href="http://localhost/SERVEURANIMAUX/back/login" role="button">Connexion administrateur</a>
            </div>
        </nav>
    </>
);

export default navbar;
