const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			],
			urlBase: 'https://swapi.dev/api/',
			characters: [],
			planets: [] 

		},
		actions: {

			getCharacters : async ()=>{

				let store = getStore();

				try {
					let response = await fetch(`${store.urlBase}people`);

					if(response.ok){
					let data = 	await response.json();
					console.log('Se obtuvieron los personajes')
					setStore({
						...store,
						characters: data.results
					})
					}else{
						console.log('Epa bro no funciono revisa!')
					}
				} catch (error) {
					
				}

			},

			getPlanets : async ()=>{

				let store = getStore();

				try {
					let response = await fetch(`${store.urlBase}planets`);

					if(response.ok){
					let data = 	await response.json();
					console.log('Se obtuvieron los planetas')
					setStore({
						...store,
						planets: data.results
					})
					}else{
						console.log('Epa bro no funciono revisa!')
					}
				} catch (error) {
					
				}
			},
			// Use getActions to call a function within a fuction
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
