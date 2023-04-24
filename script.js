const jokeElement = document.getElementById('joke')
const nextJoke = document.getElementById('nextBtn')

nextJoke.addEventListener('click', fetchJoke)

fetchJoke()

// Using async await

async function fetchJoke() {

    const apiConfiguration = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com/', apiConfiguration)

    const fetchedData = await response.json()

    const joke = fetchedData.joke

    jokeElement.innerHTML = joke

    // Using .then()

    // fetch('https://icanhazdadjoke.com/', config).then((response) => response.json()).then((fetchedData) => { jokeElement.innerHTML = fetchedData.joke })
}