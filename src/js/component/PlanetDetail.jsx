import React, {useContext} from "react";

//image
import rigoBaby from "../../img/rigo-baby.jpg";

//context
import {Context} from "../store/appContext.js"

//params
import { useParams } from "react-router";


const PlanetDetail = ()=>{

    //destructurar el contexto
    const {store} = useContext(Context)

    //destructuramos los parametros
    const params = useParams();
    const {planet_id} = params;

    const planet = store.planets.find(element=>element._id == planet_id )
    console.log(planet?.properties.name)

    //funcion para extraer el planeta

    return(
        <div className="container my-3">
            <div className="row ">
                <div className="col-12 d-flex justify-content-between align-items-center">
                        <img className="" src={rigoBaby} alt="Imagen del personaje" />
                    <div className="text-center  ">
                        <h1>{planet?.properties.name}</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                        molestiae nihil pariatur. Laudantium natus, veritatis eum
                        voluptatibus consectetur suscipit maxime deserunt aliquid,
                        necessitatibus sapiente inventore? Hic ratione modi perspiciatis
                        cumque.
                        </p>
                    </div>
                </div>
            </div>
           
            <div className="row border-top  border-danger my-3 text-center pt-3">
                    <div className="col-12 col-md-2   " > 
                        <h5 className="text-danger" > <b>Name </b> </h5>
                        <h5 className="text-danger">{planet?.properties.name}</h5>
                    </div>
                    <div className="col-12 col-md-2  " > 
                        <h5 className="text-danger" ><b>Climate</b></h5>
                     <h5 className="text-danger">{planet?.properties.climate}</h5>
                    </div>
                    <div className="col-12 col-md-2  " > 
                        <h5 className="text-danger" > <b>Population</b> </h5>
                        <h5 className="text-danger">{planet?.properties.population}</h5>
                    </div> 
                    <div className="col-12 col-md-2  " > 
                        <h5 className="text-danger" ><b>Orbital period</b></h5>
                        <h5 className="text-danger">{planet?.properties.orbital_period}</h5>
                    </div>
                    <div className="col-12 col-md-2  " > 
                        <h5 className="text-danger" ><b>Rotation period</b></h5>
                        <h5 className="text-danger">{planet?.properties.rotation_period}</h5>
                    </div>
                    <div className="col-12 col-md-2  " > 
                        <h5 className="text-danger" ><b>Diameter</b></h5>
                        <h5 className="text-danger">{planet?.properties.diameter}</h5>
                    </div>
            </div>
        </div>
        
    );
}

export default PlanetDetail;