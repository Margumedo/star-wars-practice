import React from "react";

//imagenes
import starWarsImage from '../../img/StarWars.png'

const Planets = ({planets})=>{

    const{name, population, terrain} = planets

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3 border border-primary ">
        <div className="card" >
            <img src={starWarsImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"> <b>{name}</b> </h5><br />
                <span className="card-text">Population: {population}</span><br />
                <span className="card-text">Terrain: {terrain}</span><br />
                <a href="#" className="btn btn-outline-primary mt-4">Lean more!</a>
            </div>
        </div>
    </div>
    ); 
}

export default Planets