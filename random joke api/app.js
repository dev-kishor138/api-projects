const container = document.getElementById('joke');
const btn = document.getElementById('btn');

const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

const getJoke = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        container.textContent = `${data.joke}`;
    });
}
btn.addEventListener('click', getJoke)
getJoke();