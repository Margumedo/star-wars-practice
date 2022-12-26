import React, { useContext } from "react";

//imagenes
import starWarsImage from '../../img/StarWars.png'

//router-dom
import { Link } from "react-router-dom";

const Characters = ({characters}) => {

    const {name, hair_color, gender, eye_color} = characters
    

    return (
       
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3 border border-primary ">
                <div className="card" >
                    <img src={starWarsImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> <b>{name}</b> </h5>
                        <br />
                        <span className="card-text">Gender: {gender}</span>
                        <br />
                        <span className="card-text">Hair: {hair_color}</span>
                        <br />
                        <p className="card-text">Eye-Color: {eye_color}</p>
                        <Link to={`/character/`} className="btn btn-outline-primary mt-2">
                            Lean more!
                        </Link>
                    </div>
                </div>
            </div>

    
    );
}

export default Characters;