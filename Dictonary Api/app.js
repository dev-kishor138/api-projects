const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const result = document.querySelector('.result');
const sound = document.querySelector('#sound');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const inputField = document.getElementById('search');
    input = inputField.value;
    inputField.value = '';
    fetch(`${url}${input}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        result.innerHTML = `
        <div class="word">
            <h3>${input}</h3>
            <button>
                <i class="fa-solid fa-volume-high"></i>
            </button>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>/${data[0].phonetic}/</p>
        </div>
        <p class="word-meaning">${data[0].meanings[0].definitions[0].defination}</p>
        <p class="word-example">${data[0].meanings[0].definitions[0].exaple || ""}</p>
        `;
    });

});