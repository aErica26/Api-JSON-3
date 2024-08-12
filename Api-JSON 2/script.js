
document.getElementById('fetchButton').addEventListener('click', carregarPersonagens);

function carregarPersonagens() {
    fetch('https://rickandmortyapi.com/api/character', {
    })
        .then(response => response.json())
        .then(data => {
            
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = '';


            data.results.forEach(item => {
                console.log(item)

                const card = document.createElement('div');
                card.className = 'personagem-card';

                const img = document.createElement('img')
                img.src = item.image
                card.appendChild(img)

                const nome = document.createElement('h2')
                nome.innerHTML = item.name
                card.appendChild(nome)

                const episode = document.createElement('div')
                episode.innerHTML = item.episode
                card.appendChild(episode)

                const species = document.createElement('div')
                species.innerHTML = item.species
                card.appendChild(species)

                const status = document.createElement('div')
                status.innerHTML = item.status
                card.appendChild(status)

                const type = document.createElement('div')
                type.innerHTML = item.type
                card.appendChild(type)

                gallery.appendChild(card); 
            });
        })
        .catch(error => console.error('Error ao carregar os personagens', error));
}