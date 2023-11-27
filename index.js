const pokeList = document.querySelector('#poke-list')

fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then(response => {
  response.json().then(data => {
    console.log(data)
    data.results.forEach(pokemon => {
      fetch(pokemon.url).then(response => {
        response.json().then(poke => {
            let li = document.createElement('li')
            li.innerText = poke.name
            let img = document.createElement('img')
            img.src = poke.sprites.other["official-artwork"].front_shiny
            img.alt = poke.name
            pokeList.appendChild(li)
            li.appendChild(img)
        })
      })
    })
  })
})
