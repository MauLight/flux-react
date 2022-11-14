import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import getState from "../store/flux";

export const Home = () => {

	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<h1 className="mb-5">Gotta Catch Em' All</h1>
			<div className="d-inline-flex justify-content-center">
				<ul className="list-group">
					{
						store.pokemons.map((pokemon, i) => {
							return (
								<li key={i} className="names list-group-item">
									<Link to={'/details/' + pokemon.name}>
										<p>{pokemon.name}</p>
									</Link>
									<button onClick={() => actions.favMon(pokemon)} >fav</button> 
								</li>
							)
						})
					}
				</ul>
				<ul className="list-group">
					{
						store.pokemons2.map((pokemon, i) => {
							return (
								<li key={i} className="names list-group-item">
									<Link to={'/details/' + pokemon.name}>
										<p>{pokemon.name}</p>
									</Link>
								</li>
							)
						})
					}
				</ul>
				<ul className="list-group">
					{
						store.pokemons3.map((pokemon, i) => {
							return (
								<li key={i} className="names list-group-item">
									<Link to={'/details/' + pokemon.name}>
										<p>{pokemon.name}</p>
									</Link>
								</li>
							)
						})
					}
				</ul>
			</div>
		</div>
	);
}





