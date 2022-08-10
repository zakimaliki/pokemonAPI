console.log('You have connected...')
fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
.then(response => response.json())
.then(function(allpokemon){
    allpokemon.results.forEach(function(pokemon){
        let url = pokemon.url
        fetch(url)
        .then(response => response.json())
        .then(function(pokeData){
        renderPokemon(pokeData)
        })
    })
})



function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") 
    pokeContainer.classList.add('ui', 'card');
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')
    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`
    pokeImgContainer.append(pokeImage);
    let pokeName = document.createElement('h4') 
    pokeName.innerText = pokeData.name
    let pokeUrl = document.createElement('h5')
    pokeUrl.innerText = `https://pokeapi.co/api/v2/pokemon/${pokeData.id}`
    pokeContainer.append(pokeImgContainer, pokeName, pokeUrl); 
    allPokemonContainer.appendChild(pokeContainer);
}