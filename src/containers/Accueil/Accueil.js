import React , {Component} from 'react';
import TitreH1 from '../../components/UI/Titres/TitresH1'; // Juste deux niveaux vers le haut
import Myzoo from "../../assets/images/Myzoo.png";
import elephant from "../../assets/images/elephant.png";
import oiseaux from "../../assets/images/oiseaux.png";



class Accueil extends Component {

    componentDidMount = () => {
        document.title = "MyZoo - Accueil";
    }
    render(){
        return (
            <div>
                <img src={Myzoo} alt="myzoo" className="img-fluid" style={{ width: '100%' }} />
                <TitreH1 bgColor={"bg-success"}>My zoo vous invite a venir découvrir le parc</TitreH1>
                <div className="container">
                    <p>
                        Bienvenue à MyZoo, l'oasis de biodiversité où chaque visite se transforme en une aventure exotique !
                        Niché au cœur de la nature, MyZoo vous invite à un voyage éducatif et ludique à la rencontre d'une faune variée
                        et fascinante. Ici, chaque recoin raconte une histoire,
                        chaque espèce révèle un mystère et chaque expérience enrichit notre compréhension du monde animal.
                    </p>
                    <p>
                        Dès l'entrée, laissez-vous envelopper par les chants mélodieux de nos oiseaux colorés,
                        et suivez le chemin sinueux qui vous mène à travers des habitats soigneusement conçus pour
                        offrir à nos résidents un chez-eux qui imite leur milieu naturel. Des puissants félins aux
                        majestueuses girafes, en passant par les malicieux primates et les reptiles intrigants, MyZoo
                        abrite une diversité d'espèces prêtes à captiver votre curiosité.
                    </p>
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-md-6">
                            <img src={elephant} alt="elephant" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                Nous sommes engagés dans la conservation et l'éducation, et nous sommes fiers de partager avec vous notre passion pour la protection
                                de la vie sauvage. Nos guides experts et nos panneaux interactifs fournissent des informations captivantes,
                                rendant votre visite à la fois amusante et informative. Que vous soyez un passionné de nature,
                                en sortie familiale ou en quête d'une expérience unique, MyZoo est l'endroit idéal pour forger des souvenirs inoubliables
                                tout en apprenant l'importance de la conservation.
                            </p>
                        </div>
                    </div>
                    {/* Nouvelle rangée avec texte à gauche et image à droite */}
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-md-6">
                            <p>
                                Préparez-vous à être émerveillé, à apprendre et à vous connecter avec la nature de manière que vous n'auriez jamais imaginée.
                                MyZoo vous attend pour explorer le sauvage et merveilleux monde des animaux.
                                Alors, prenez vos jumelles, chaussez vos bottes d'aventurier et rejoignez-nous pour une journée exceptionnelle
                                au cœur de la vie sauvage !
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={oiseaux} alt="oiseaux exotiques" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accueil;
