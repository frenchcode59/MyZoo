import { Component } from 'react';
import TitresH1 from "../../../components/UI/Titres/TitresH1";
import axios from "axios";
import animal from "./Animal/Animal";
import Animal from "./Animal/Animal";

class Parc extends Component  {
    state= {
        animaux :  null
    }
    componentDidMount = () => {
        axios.get('http://localhost/SERVEURANIMAUX/front/animaux')
            .then(response => {
                this.setState({animaux : Object.values( response.data)})
            })
    }
    render(){
        return (
            <>
            <TitresH1 bgColor={"bg-success"}>Les animaux du parc</TitresH1>
            <div className={"container"}>
                <div className={"row no-gutters"}>


                {this.state.animaux && this.state.animaux.map((animal) => {
                    /*j'utilise spread ...animal pour envoyer toutes les prprietes de mon objet animal a travers les props */
                    return (
                        <div className={"col-12 col-md-6 col-xl-4"} key={animal.id}>
                            <Animal {...animal} />
                        </div>
                    )
                })

                }
                </div>

            </div>
    </>
        );
    }
}

export default Parc;
