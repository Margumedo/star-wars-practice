import React, { useContext } from "react";
import { Link } from "react-router-dom";

//context
import {Context} from '../store/appContext.js'

//image
import starWarsNav from '../../img/Star-Wars-Logo-Azul-2.png'

//styles
import '../../styles/home.css'

export const Navbar = () => {
	
	const {store, actions} = useContext(Context);

	

	return (

		<div className="container ">
			<nav className="navbar navbar-expand-lg navbar-light bg-light back">
				<div className="container-fluid">
					
					<Link className="navbar-brand" to={'/'}> <img className="image-nav" src={starWarsNav}  alt=''/> </Link>
					<button className="navbar-toggler bg bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon btn btn-dark "></span>
					</button>
				
					
					<div className="collapse navbar-collapse  justify-content-end" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle btn btn-primary text-light" href="#" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
									Favorites <span className="bg-secondary rounded" >{store.favorites.length}</span>
								</a>
								<ul className="dropdown-menu back border border-dark">
									{store.favorites.length >0
									?store.favorites.map((item,index)=>(<li onClick={()=>actions.deleteFavorites(item._id)} key={index} ><a className="dropdown-item text-primary" href="#">{item.properties.name} <i className="fa-solid fa-trash text-danger ps-2"></i></a></li>))
									: <div className="container text-center text-light">(empty)</div>} 
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>

		</div>
	);
};
