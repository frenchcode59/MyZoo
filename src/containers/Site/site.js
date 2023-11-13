import { Component } from 'react';
import Navbar from '../../components/UI/NavBar/NavBar';
import {Route, Routes} from "react-router-dom";
import Accueil from "../Accueil/Accueil";
import Error from "../../components/Error/Error";
import Footer from "../../components/Footer/Footer";
import Parc from "../Site/Parc/Parc";

class Site extends Component  {
    render(){
        return (
           <>
               <div className="site">
            <Navbar />
              <Routes>
                  <Route path="/"  element={<Accueil />} />
                    <Route path="/animaux" element={<Parc />} />
                  <Route path="*" element={<Error type={"404"}> La page n'existe pas </Error>} />
              </Routes>
                   <div className={"minSite"}></div>
               </div>
               <Footer />
           </>
        );
    }
}

export default Site;
