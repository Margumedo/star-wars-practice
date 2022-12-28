import React from "react";

//imagenes
import starWarsImage from '../../img/StarWars.png'

//router-dom
import { Link } from "react-router-dom";

const Planets = ({planets, id})=>{

    const{name, population, terrain} = planets

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3 border border-primary ">
        <div className="card" >
            <img src={starWarsImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"> <b>{name}</b> </h5><br />
                <span className="card-text">Population: {population}</span><br />
                <span className="card-text">Terrain: {terrain}</span><br />
                <Link to={`/planet/${id}`} className="btn btn-outline-primary mt-4">
                    Lean more!
                </Link>
            </div>
        </div>
    </div>
    ); 
}

export default Planets