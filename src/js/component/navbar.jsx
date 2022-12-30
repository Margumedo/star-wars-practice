import React, { useContext } from "react";
import { Link } from "react-router-dom";

//context
import {Context} from '../store/appContext.js'

export const Navbar = () => {
	
	const {store, actions} = useContext(Context);

	

	return (

		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					
					<Link className="navbar-brand" to={'/'}>StarWars</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				
					
					<div className="collapse navbar-collapse  justify-content-end" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle btn btn-primary text-light" href="#" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
									Favorites <span className="bg-secondary rounded" >{store.favorites.length}</span>
								</a>
								<ul className="dropdown-menu ">
									{store.favorites.length >0
									?store.favorites.map((item,index)=>(<li onClick={()=>actions.deleteFavorites(item._id)} key={index} ><a className="dropdown-item text-primary" href="#">{item.properties.name} <i className="fa-solid fa-trash text-dark"></i></a></li>))
									: <div className="container text-center">(empty)</div>} 
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>

		</div>
	);
};
