fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(JokeData =>{
        const jokeText = JokeData.attachments[0].text;
        const joke = document.querySelector('#joke');

        joke.innerHTML = jokeText;
    })