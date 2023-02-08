let searchInput = document.querySelector('#searchInput');
let searchBtn = document.querySelector('#searchBtn');
let inspireBtn = document.querySelector('#inspireBtn');
let errorMessage = document.querySelector('#errorMessage');
let recipeInfo = document.querySelector('#recipeInfo');
let recipeTitle = document.querySelector('#recipeTitle');
let ingredients = document.querySelector('#ingredients');
let preparationTime = document.querySelector('#preparationTime');
let portions = document.querySelector('#portions');
let instructions = document.querySelector('#instructions');

searchBtn.addEventListener('click', function() {
  let recipeName = searchInput.value;
  if (!recipeName) return;

  fetch(`https://tasty.p.rapidapi.com/recipes/search?q=${recipeName}`, { method: 'GET', headers: { 'X-RapidAPI-Key': 'cb0c48bdd5mshb62ac4cbba2db1bp1261e1jsn99293502df0c', 'X-RapidAPI-Host': 'tasty.p.rapidapi.com' } })
    .then(response => response.json())
    .then(data => {
      if (!data.results.length) {
        errorMessage.innerHTML = `No results found for "${recipeName}"`;
        return;
      }
      let recipe = data.results[0];
      recipeTitle.innerHTML = recipe.title;
      ingredients.innerHTML = recipe.ingredients;
      preparationTime.innerHTML = recipe.preparation_time;
      portions.innerHTML = recipe.portions;
      instructions.innerHTML = recipe.instructions;
      recipeInfo.style.display = 'block';
      errorMessage.innerHTML = '';
    })
    .catch(error => {
      console.error(error);
      errorMessage.innerHTML = 'An error occurred. Please try again later.';
    });
});

inspireBtn.addEventListener('click', function() {
  fetch('https://tasty.p.rapidapi.com/recipes/random', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cb0c48bdd5mshb62ac4cbba2db1bp1261e1jsn99293502df0c',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(data => {
      let recipe = data.recipe;
      recipeTitle.innerHTML = recipe.title;
      ingredients.innerHTML = recipe.ingredients;
      preparationTime.innerHTML = recipe.preparation_time;
      portions.innerHTML = recipe.portions;
      instructions.innerHTML = recipe.instructions;
      recipeInfo.style.display = 'block';
      errorMessage.innerHTML = '';
    })
	let searchInput = document.querySelector('#searchInput');
	let searchBtn = document.querySelector('#searchBtn');
	let inspireBtn = document.querySelector('#inspireBtn');
	let errorMessage = document.querySelector('#errorMessage');
	let recipeInfo = document.querySelector('#recipeInfo');
	let recipeTitle = document.querySelector('#recipeTitle');
	let ingredients = document.querySelector('#ingredients');
	let preparationTime = document.querySelector('#preparationTime');
	let portions = document.querySelector('#portions');
	let instructions = document.querySelector('#instructions');
	
	searchBtn.addEventListener('click', function() {
	  let recipeName = searchInput.value;
	  if (!recipeName) return;
	
	  fetch(`https://tasty.p.rapidapi.com/recipes/search?q=${recipeName}`, { method: 'GET', headers: { 'X-RapidAPI-Key': 'cb0c48bdd5mshb62ac4cbba2db1bp1261e1jsn99293502df0c', 'X-RapidAPI-Host': 'tasty.p.rapidapi.com' } })
		.then(response => response.json())
		.then(data => {
		  if (!data.results.length) {
			errorMessage.innerHTML = `No results found for "${recipeName}"`;
			return;
		  }
		  let recipe = data.results[0];
		  recipeTitle.innerHTML = recipe.title;
		  ingredients.innerHTML = recipe.ingredients;
		  preparationTime.innerHTML = recipe.preparation_time;
		  portions.innerHTML = recipe.portions;
		  instructions.innerHTML = recipe.instructions;
		  recipeInfo.style.display = 'block';
		  errorMessage.innerHTML = '';
		})
		.catch(error => {
		  console.error(error);
		  errorMessage.innerHTML = 'An error occurred. Please try again later.';
		});
	});
	
	inspireBtn.addEventListener('click', function() {
	  fetch('https://tasty.p.rapidapi.com/recipes/random', {
		method: 'GET',
		headers: {
		  'X-RapidAPI-Key': 'cb0c48bdd5mshb62ac4cbba2db1bp1261e1jsn99293502df0c',
		  'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
		}
	  })
		.then(response => response.json())
		.then(data => {
		  let recipe = data.recipe;
		  recipeTitle.innerHTML = recipe.title;
		  ingredients.innerHTML = recipe.ingredients;
		  preparationTime.innerHTML = recipe.preparation_time;
		  portions.innerHTML = recipe.portions;
		  instructions.innerHTML = recipe.instructions;
		  recipeInfo.style.display = 'block';
		  errorMessage.innerHTML = '';
		})
		.catch(error => {
		  console.error(error);
		  errorMessage.innerHTML;