const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			pokemons: [],
			pokemons2: [],
			pokemons3: [],
			favpokemons: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			favMon: (name) => {
				const store = getStore();
				setStore({favpokemons: [...store.favpokemons, {name}]});

			},

			delMon: (id) => {
				let elem = document.getElementById(id).title;
				const store = getStore();
				setStore({favpokemons: store.favpokemons.filter(fav => fav.name.name !== elem)});
			},


			getPokedex: async () => {
				let url = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';
				let options_get = {
					method: 'GET',
					headers: {
						'content-type': 'application/json',
						'Access-Control-Allow-Origin': '*'
					}
				}
				try {
					const response = await fetch(url, options_get);
					const data = await response.json();
					console.log(data);
					setStore({ pokemons: data.results });
				}
				catch(error) {
					console.log(error);
				}
			
			},

			// Use getActions to call a function within a fuction
			/*
			getPokedex: async () => {
				await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
					.then((response) => response.json())
					.then((data) => setStore({ pokemons: data.results }))
					.catch((error) => console.log('error'));
			},
			*/
			getPokedex2: async () => {
				let url = 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20';
				let options_get = {
					method: 'GET',
					headers: {
						'content-type': 'application/json',
						'Access-Control-Allow-Origin': '*'
					}
				}
				try {
					const response = await fetch(url, options_get);
					const data = await response.json();
					console.log(data);
					setStore({ pokemons2: data.results });
				}
				catch(error) {
					console.log(error);
				}
			
			},

			getPokedex3:  async () => {
				let url = 'https://pokeapi.co/api/v2/pokemon?offset=60&limit=20';
				let options_get = {
					method: 'GET',
					headers: {
						'content-type': 'application/json',
						'Access-Control-Allow-Origin': '*'
					}
				}
				try {
					const response = await fetch(url, options_get);
					const data = await response.json();
					console.log(data);
					setStore({ pokemons3: data.results });
				}
				catch(error) {
					console.log(error);
				}
			
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;


