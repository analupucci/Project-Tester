const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');
const inspireBtn = document.querySelector('#inspireBtn');
const errorMessage = document.querySelector('#errorMessage');
const recipeInfo = document.querySelector('#recipeInfo');
const recipeTitle = document.querySelector('#recipeTitle');
const ingredients = document.querySelector('#ingredients');
const preparationTime = document.querySelector('#preparationTime');
const portions = document.querySelector('#portions');
const instructions = document.querySelector('#instructions');

searchBtn.addEventListener('click', function() {
  const recipeName = searchInput.value;
  if (!recipeName) return;

  fetch(`https://tasty.p.rapidapi.com/recipes/search?q=${recipeName}`, { method: 'GET', headers: { 'X-RapidAPI-Key': 'cb0c48bdd5mshb62ac4cbba2db1bp1261e1jsn99293502df0c', 'X-RapidAPI-Host': 'tasty.p.rapidapi.com' } })
    .then(response => response.json())
    .then(data => {
      if (!data.results.length) {
        errorMessage.innerHTML = `No results found for "${recipeName}"`;
        return;
      }
      const recipe = data.results[0];
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
      const recipe = data.recipe;
      recipeTitle.innerHTML = recipe.title;
      ingredients.innerHTML = recipe.ingredients;
      preparationTime.innerHTML = recipe.preparation_time;
      portions.innerHTML = recipe.portions;
      instructions.innerHTML = recipe.instructions;
      recipeInfo.style.display = 'block';
      errorMessage.innerHTML = '';
    })const searchInput = document.querySelector('#searchInput');
	const searchBtn = document.querySelector('#searchBtn');
	const inspireBtn = document.querySelector('#inspireBtn');
	const errorMessage = document.querySelector('#errorMessage');
	const recipeInfo = document.querySelector('#recipeInfo');
	const recipeTitle = document.querySelector('#recipeTitle');
	const ingredients = document.querySelector('#ingredients');
	const preparationTime = document.querySelector('#preparationTime');
	const portions = document.querySelector('#portions');
	const instructions = document.querySelector('#instructions');
	
	searchBtn.addEventListener('click', function() {
	  const recipeName = searchInput.value;
	  if (!recipeName) return;
	
	  fetch(`https://tasty.p.rapidapi.com/recipes/search?q=${recipeName}`, { method: 'GET', headers: { 'X-RapidAPI-Key': 'cb0c48bdd5mshb62ac4cbba2db1bp1261e1jsn99293502df0c', 'X-RapidAPI-Host': 'tasty.p.rapidapi.com' } })
		.then(response => response.json())
		.then(data => {
		  if (!data.results.length) {
			errorMessage.innerHTML = `No results found for "${recipeName}"`;
			return;
		  }
		  const recipe = data.results[0];
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
		  const recipe = data.recipe;
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
		  errorMessage.innerHTML
	