import React, {useState, useContext} from "react";

//imagenes
import starWarsImage from '../../img/StarWars.png'

//router-dom
import { Link } from "react-router-dom";

//Context
import {Context} from '../store/appContext.js'

const Planets = ({planets, id})=>{

    const {store, actions} = useContext(Context)

    const{name, population, terrain} = planets
  
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3  ">
        <div className="card " >
            <img src={starWarsImage} className="card-img-top" alt="..." />
            <div className="card-body back text-light">
                <h5 className="card-title"> <b>{name}</b> </h5><br />
                <span className="card-text">Population: {population}</span><br />
                <p className="card-text">Terrain: {terrain}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/planet/${id}`} className="btn btn-outline-primary mt-2">
                        Learn more!
                    </Link>
                    <button onClick={()=>actions.addFavorites(id)} type="button" className="btn btn-outline-warning mt-2">
                    {store.favorites.find(element=>element._id == id ) 
                                ?<i className="fa-solid fa-heart"></i>
                                :<i className="fa-regular fa-heart"></i>
                                }    
                    </button>
                </div>
            </div>
        </div>
    </div>
    ); 
}

export default Planets