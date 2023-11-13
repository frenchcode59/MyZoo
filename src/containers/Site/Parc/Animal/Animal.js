import React from "react";
import Bouton from "../../../../components/UI/Bouton/Bouton";

const animal = (props) => (
    <>
        <div className="card mb-3">
            <h3 className="card-header">{props.id} - {props.nom}</h3>
            <div className="card-body">
                <div className="card-text">
                    {props.description}
                </div>
            </div>

            <img style={{height: '300px', display: 'block'}}
                 src={props.image} alt="Card image" />
                <rect width="100%" height="100%" fill="#868e96"></rect>


            <div className="card-body">
               <h3>Famille : </h3>
                <Bouton typeBtn={"btn-primary"}> {props.famille.libelleFamille.toUpperCase()}</Bouton>
                <div>{props.famille.descriptionFamille}</div>
            </div>
            <div className="card-body">
                <h3>Continents :</h3>
                {
                    props.continents.map((continent) => {
                        let colorBtn = "";
                        switch (continent.idContinent) {
                            case 1: colorBtn = "btn-primary";
                            break;
                            case 2: colorBtn = "btn-success";
                            break;
                            case 3: colorBtn = "btn-danger";
                            break;
                            case 4: colorBtn = "btn-warning";
                            break;
                            case 5: colorBtn = "btn-info";
                            break;
                            default: colorBtn = "btn-secondary";
                        }

                        return (
                            <Bouton typeBtn={colorBtn} css="m-1" key={continent.idContinent}>
                                {continent.libelleContinent.toUpperCase()}
                            </Bouton>
                        );
                    })
                }
            </div>




        </div>

    </>
);

export default animal;
