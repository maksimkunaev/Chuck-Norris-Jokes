const chuck_api = 'https://api.chucknorris.io/jokes/random';

function getJoke() {
    return new Promise((resolve, reject) => {
        fetch(chuck_api)
            .then(response => response.json())
            .then(joke => {
                setTimeout(() => {
                    resolve(joke)
                }, 100)
            })
            .catch(error => reject(error))
    })

}

export default getJoke;
