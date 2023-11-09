// searchinput
// searchbutton
const dictionary = (word) => {
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '61ca78da27mshb92987b3b08fc23p14cc02jsn6ab845b9234d',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        wordheading.innerHTML = "The Meaning Of: "+ response.word;
        definition.innerHTML = response.definition.replace("2.", "<br>2").replace("3.", "<br>3.").replace("4.", "<br>4.").replace("5.", "<br>5.").replace("6.", "<br>6.").replace("7.", "<br>7.").replace("8.", "<br>8.").replace("9.", "<br>9.").replace("10.", "<br>10.");

    }
    )
    .catch(err => {
        console.log(err);
        
    }
    );
  
}

searchbutton.addEventListener('click', (e) => {
    e.preventDefault();
    dictionary(searchinput.value);
})
