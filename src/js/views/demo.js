import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	//const { store, actions } = useContext(Context);
	const [name, setName] = useState([]);
	const [poke, setPoke] = useState([]);
	const [poke1, setPoke1] = useState([]);

	const getPokeAsync = async () => {
		try {
			const getPoke = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
			const data = await getPoke.json();
			console.log(data)
			setName(data.results);
		}
		catch {
			console.log('error');
		}
	};

	const getAgainPokeAsync = async () => {
		await fetch('https://pokeapi.co/api/v2/pokemon?offset=40&limit=20')
			.then((response) => response.json())
			.then((data) => setPoke(data.results))
			.catch((error) => console.log('error'));
	};

	const getAgainPokeAsync2 = async () => {
		await fetch('https://pokeapi.co/api/v2/pokemon?offset=60&limit=20')
			.then((response) => response.json())
			.then((data) => setPoke1(data.results))
			.catch((error) => console.log('error'));
	};

	useEffect(() => {
		getPokeAsync();
	}, []);

	useEffect(() => {
		getAgainPokeAsync();
	}, []);
	useEffect(() => {
		getAgainPokeAsync2();
	}, []);

	return (
		<div className="container d-inline-flex justify-content-center">
			<ul className="list-group">
				{
					!!name && name.map((item, i) => {
						return (
							<li className="names list-group-item" key={i}>{item.name}</li>
						)
					})
				}
			</ul>
			<ul>
				{
					!!poke && poke.map((item, i) => {
						return (
							<li className="names list-group-item" key={i}>{item.name}</li>
						)
					})
				}
			</ul>
			<ul>
				{
					!!poke1 && poke1.map((item, i) => {
						return (
							<li className="names list-group-item" key={i}>{item.name}</li>
						)
					})
				}
			</ul>

		</div>
	);
};
