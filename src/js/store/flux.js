const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			urlBase: 'https://www.swapi.tech/api/',
			people: [],
			planets: [],
			vehicles:[],
			elements: ["people","planets","vehicles"],
			favorites: [],
			heartIcon: false,

		},
		actions: {

			getData : ()=>{
				let store = getStore();

				try {
					store.elements.forEach( async element => {
						let response = await fetch(`${store.urlBase}${element}`)
						if (response.ok){
							let data = await response.json();
							//console.log(data.results);

							data.results.forEach( async elementTwo=>{
								console.log(elementTwo.url)
								let responseTwo = await fetch(elementTwo.url);
								if(response.ok){
									let dataTwo = await responseTwo.json();
									console.log(dataTwo.result)
									setStore({
										...store,
										[element]: [...store[element],dataTwo.result]
										//planet:  store.planet, dataTwo.result
										//people:  store.people, dataTwo.result
									})

								}else{
									console.log("Epa bro no funciono el segundo fecth")
								}
							})

						}else{
							console.log("Epa bro no funciono el primer fecth")
						}

					});
					
				} catch (error) {
					console.log(`Epa bro explote con el siguiente error: ${error}`)
				}
			},

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

			addFavorites: (id)=>{

				console.log(id)
				let store = getStore();
				let actions = getActions ();

				let exist = store.favorites.find(element=>element._id == id );
				if(!exist){
					store.elements.forEach(item=>{
						let favorite = store[item].find(elementTwo=>elementTwo._id == id )
						console.log("----------")
						console.log(favorite)
						if(favorite){
							setStore(
								{...store,
									favorites: [...store.favorites,favorite]
								})
								
							}
						})
				}else{
					actions.deleteFavorites(id);
				}
				
			},

			deleteFavorites: (id)=>{
				let store = getStore();

				let favorite = store.favorites.filter(element=>element._id != id )
				console.log("soy el favorito a elimianr")
				console.log(favorite)
				  setStore(
					 {...store,
						 favorites: favorite
					 })

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
