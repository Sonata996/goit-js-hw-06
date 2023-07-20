const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// variant 1
const ulIngredients = document.querySelector('#ingredients')
for (const element of ingredients) {
 const separateIng = document.createElement('li')
  separateIng.textContent = element
  ulIngredients.appendChild(separateIng)
}
console.log(ulIngredients);

// variant 2
// const ulIngredients = document.querySelector('#ingredients')
// const arrIng = ingredients.map(elem => {
//   const separateIng = document.createElement('li')
//   separateIng.textContent = elem
//   return ulIngredients.appendChild(separateIng)
// })
