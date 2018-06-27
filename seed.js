const jsonfile = require('jsonfile');
const FILE = 'pokedex.json';


// REMEMBER TO CHANGE YOUR CONFIGS BEFORE RUNNING THIS SCRIPT!!
const pg = require('pg');
const configs = {
	user: 'scottlee',
	host: '127.0.0.1',
	database: 'pokemons',
	port: '5432'
};

const client = new pg.Client(configs);

jsonfile.readFile(FILE, (err,obj)=>{
	client.connect((err) => {
	if (err) {
		console.log('Connection error', err.message);
	}
	var counter=0;
	console.log('Connected to dB');

	let text = 'INSERT INTO pokemon (name, num, img, weight, height) ' + ' VALUES($1, $2, $3, $4, $5)';

	for (let i=0; i<obj.pokemon.length; i++){
		let values = [obj.pokemon[i].name, obj.pokemon[i].num, obj.pokemon[i].img, obj.pokemon[i].weight, obj.pokemon[i].height];

		client.query(text, values, (err, res) => {
			if (err) {
				console.log("Query error", err.message);
			} else {
				console.log("Entry added " + counter);
				counter++;
			}
			if (counter === obj.pokemon.length) {client.end();}
		});
	}	
});
});
