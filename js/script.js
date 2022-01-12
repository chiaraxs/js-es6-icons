// 1. creo array di oggetti
const icons = [
	
    {
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

// 2. aggancio html
const iconsContainer = document.getElementById('container-icon')
const optionContainer = document.querySelector('.option-container')

// 3. stampo tutte le cards icons con forEach
icons.forEach((element) => {
   iconsContainer.innerHTML += ` 
    <div class="icons">
        <i class= "${element.family} ${element.prefix}${element.name} ${element.color}"> </i>
        <div>${element.name.toUpperCase()}</div>
    </div>`;
})


// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). 
//Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

// 4. stampo in pagina select con options
optionContainer.innerHTML += ` 
<p>FILTRA PER TIPO
    <select id="options" name="options">
        <option value="all">All</option>
        <option value="animals">Animals</option>
        <option value="vegetables">Vegetables</option>
        <option value="user">User</option>
    </select>
</p>`;


// optionContainer.innerHTML += ` 
// <p>FILTRA PER TIPO
//     <select id="options" name="options">
//         <option value="all">All</option>
//         <option value="animals">${icons.type}</option>
//         <option value="vegetables">${icons.type}</option>
//         <option value="user">${icons.type}</option>
//     </select>
// </p>`;


// 5. provo filter

// con filter, suddivido e creo 3 'sotto-array' di oggetti separati: animals, vegetables, user
// in modo da poterli successivamente estrapolare type x type
const animalsIcon = icons.filter((option) => {
    const animalsTypeIcon = option.type;
    return animalsTypeIcon === 'animal';
});


const vegetablesIcon = icons.filter((option) => {
    const vegetablesTypeIcon = option.type;
    return vegetablesTypeIcon === 'vegetables';
});


const userIcon = icons.filter((option) => {
    const userTypeIcon = option.type;
    return userTypeIcon === 'user';
});


// con filter, creo array per oggetti scelti dall'utente con eventListener on click

const optionChoosen = icons.filter((type) => {

    optionContainer.addEventListener('click', function(){
        if(type === icons.type ) {
            return true;
        }
        return false;
    })
   
});

console.log(optionChoosen); // console debug








// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, 
// sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.
