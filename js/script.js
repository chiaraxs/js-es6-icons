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


// 2. aggancio dom per stampa
const iconsContainer = document.getElementById('container-icon');
const optionContainer = document.querySelector('.option-container');


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

// 4. stampo in pagina l'input select con options di scelta type
optionContainer.innerHTML += ` 
<p>FILTRA PER TIPO
    <select id="options" name="options">
        <option value="all">All</option>
        <option value="animal">Animal</option>
        <option value="vegetable">Vegetable</option>
        <option value="user">User</option>
    </select>
</p>`;

// creo variabile per agganciare in dom il select che mi permette la scelta
const select = document.getElementById('options');

// 5. scateno evento change on click -> change type on select id='options' -> all, animal, vegetable, user
select.addEventListener('change', function() {
    
    // con filter, filtro e creo array per icons type scelto dall'utente
    const newFilterTypeList = icons.filter(function (icon){
        const typeChoosen = icon.type;
        return typeChoosen === select.value || select.value === 'all'; // ritornami, in un nuovo array, il valore dell'icona scelta se è uguale al type || oppure ritornamelo se è incluso in 'all'
    })

    

    iconsContainer.innerHTML = '' // resetto
    // stampo nel dom con forEach l'array di elementi scelto: all || animal || vegetable || user
    newFilterTypeList.forEach((element) => {
        iconsContainer.innerHTML += ` 
         <div class="icons">
             <i class= "${element.family} ${element.prefix}${element.name} ${element.color}"> </i>
             <div>${element.name.toUpperCase()}</div>
         </div>`;
    })
     
});
