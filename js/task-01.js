const ulCategoties = document.querySelector('#categories');
const ulLength = ulCategoties.children.length;
console.dir(`Number of categories: ${ulLength}`);

const liAnimals = document.querySelectorAll('.item');
const categoryAndElements = liAnimals.forEach(element => {
    console.dir(`Category: ${element.firstElementChild.textContent}`);
    console.dir(`Elements: ${element.lastElementChild.children.length}`);
});
