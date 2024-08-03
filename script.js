/*const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);

async function generateJoke(){
	const jokeRes = await fetch('https://icanhazdadjoke.com/',
		{
			headers:
{
	accept: 'application/json'
}		
});

	const joke = await jokeRes.json();
	console.log(joke);

	jokeEl.innerHTML = joke.joke;
	
}*/


document.addEventListener('DOMContentLoaded', () => {
	const jokeContainer = document.getElementById('joke');
const jokeButton = document.getElementById('jokeButton');

	function fetchJoke() {

		fetch('https://official-joke-api.appspot.com/random_joke')
			.then(response => response.json())
			.then(joke => {
				displayJoke(joke);
			})
			.catch(error => {
				console.error('Error fetching joke:', error);
				jokeContainer.innerHTML = 'Failed to lode joke.Please try again!';
			});
	}

	function displayJoke(joke) {
		jokeContainer.innerHTML=`
		<h3> ${joke.setup}</h3>
		<p> ${joke.punchline}</p>
		`;
	}

		jokeButton.addEventListener('click', fetchJoke);

		fetchJoke();

});
