import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-3">Gotta Catch Em' All</span>
			</Link>

			<div className="dropdown btn-group dropstart mx-3">
				<button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu">
					{

						!!store.favpokemons && store.favpokemons.length > 0 && store.favpokemons.map((fav, i) => {
							return (
								<div className="mx-5 d-flex" key={i} id={++i} title={fav.name.name}>
									<Link to={'/details/' + fav.name.name}>
										{fav.name.name}
									</Link>
									<div className="btn" id={i} onClick={() => actions.delMon(i)}>
										<i className="fa-regular fa-trash-can"></i>
									</div>
								</div>
							)
						})
					}
				</ul>
			</div>
		</nav>
	);
};