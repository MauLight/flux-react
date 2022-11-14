import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Favs = () => {
	/*
		const { store, actions } = useContext(Context);
		const [favorite, setFavorite] = useState('');
	
		useEffect(() => {
			console.log(store.favpokemons);
		}, [store]);
	
	
		console.log(store.favpokemons);
		console.log(favorite);
	*/

	return (

		<ul className="dropdown-menu">
			<li><a className="dropdown-item" href="#">Action</a></li>
			<li><a className="dropdown-item" href="#">Another action</a></li>
			<li><a className="dropdown-item" href="#">Something else here</a></li>
		</ul>

	)
};

export const Navbar = () => {

	const { store, actions } = useContext(Context);

		console.log(store.favpokemons);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Gotta Catch Em' All</span>
			</Link>
			<div>
				<ul>
					{

						!!store.favpokemons && store.favpokemons.length > 0 && store.favpokemons.map((fav, i) => {
							return (
								<Link to={'/details/' + fav.name.name}><li key={i}>{fav.name.name}</li></Link>
							)
						})
					}
				</ul>
			</div>
		</nav>
	);
};

/*
{

	store.favpokemons.map((fav, i) => {
		return (
			<li key={i}><a className="dropdown-item" href="#">{fav.name.name}</a></li>
		)
	})
}
*/