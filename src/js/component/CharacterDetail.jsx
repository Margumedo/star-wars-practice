import React, { useContext } from "react";

//image
import starWarsCharacters from "../../img/Star-wars-characters.png";

//context
import {Context} from "../store/appContext.js"

//params
import { useParams } from "react-router";

//styles
import '../../styles/home.css'

const CharacterDetail = () => {

const {store} = useContext(Context)

const params = useParams();

const {character_id} = params;

console.log(store.people)
const character = store.people.find(element=>element._id == character_id )

  return (
    <div className="container my-3">
      <div className="row ">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <img className="detail-image" src={starWarsCharacters} alt="Imagen del personaje" />
          <div className="text-center text-light m-3 ">
            <h1 >{character?.properties.name}</h1>
            <p >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              molestiae nihil pariatur. Laudantium natus, veritatis eum
              voluptatibus consectetur suscipit maxime deserunt aliquid,
              necessitatibus sapiente inventore? Hic ratione modi perspiciatis
              cumque.
            </p>
          </div>
        </div>
      </div>
      <div className="row border-top border-danger my-3 text-center pt-3">
            <div className="col-12 col-md-2" > 
              <h5 className="text-danger" > <b>Name </b> </h5>
              <h5 className="text-danger">{character?.properties.name}</h5>
            </div>
            <div className="col-12 col-md-2" > 
              <h5 className="text-danger" > <b>Birth Year</b> </h5>
              <h5 className="text-danger">{character?.properties.birth_year}</h5>
            </div>
            <div className="col-12 col-md-2" > 
              <h5 className="text-danger" ><b>Gender</b></h5>
              <h5 className="text-danger">{character?.properties.gender}</h5>
            </div>
            <div className="col-12 col-md-2" > 
              <h5 className="text-danger" ><b>Height</b></h5>
              <h5 className="text-danger">{character?.properties.height}</h5>
            </div>
            <div className="col-12 col-md-2" > 
              <h5 className="text-danger" ><b>Skin Color</b></h5>
              <h5 className="text-danger">{character?.properties.skin_color}</h5>
            </div>
            <div className="col-12 col-md-2" > 
              <h5 className="text-danger" ><b>Eye Color</b></h5>
              <h5 className="text-danger">{character?.properties.eye_color}</h5>
            </div>
          </div>
    </div>
  );
};

export default CharacterDetail;
