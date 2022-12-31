import React, { useContext } from "react";
import "../../styles/home.css";

//componentes
import Title from "../component/Title.jsx"
import Characters from "../component/Characters.jsx";
import Planets from "../component/Planets.jsx";

//context
import { Context } from '../store/appContext.js'


export const Home = () => {

	const { store } = useContext(Context);

	return (
		
			<div className="container mt-5">
				<Title Title={"Characters"} color={'danger'} />
				<div className="container  slider-container d-flex ">					
						{store.people.map((character, index) => (
							<Characters key={index} characters={character.properties} id={character._id} />))
						}					
				</div>

				<Title Title={"Planets"} color={'danger'} />
				<div className="container  slider-container d-flex ">					
						{store.planets.map((planet, index) => (
							<Planets key={index} planets={planet.properties} id={planet._id} />))
						}					
				</div>
			</div>

		
	);
}

export default Home;