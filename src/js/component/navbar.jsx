import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					
					<a className="navbar-brand" href="#">StarWars</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				
					
					<div className="collapse navbar-collapse  justify-content-end" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle btn btn-primary text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Favorites <span className="bg-secondary rounded p-1" >0</span>
								</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>

		</div>
	);
};
