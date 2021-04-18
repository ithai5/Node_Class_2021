const fruits = ['apples', 'bananas', 'blueberries']

const megaFruits = fruits.map(fruit => {return {fruit: fruit.toUpperCase()}})
console.log(megaFruits);
console.log(fruits);