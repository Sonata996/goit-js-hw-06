const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// variant 2
const ulIngredients = document.querySelector('#ingredients')
const arrIng = ingredients.map(elem => {
  const separateIng = document.createElement('li')
  separateIng.textContent = elem
  return separateIng
})
ulIngredients.append(...arrIng)