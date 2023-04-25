function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses; 
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("Deep Dish", "Traditional", ["Mozzerella"], ["Pepperoni", "Sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("Hand Tossed", "Marinara", ["Mozzerella", "Feta"], ["Mushrooms", "Olives", "Onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("Thin", "Traditional", ["Mozzerella", "Asiago"], ["Italian Sausage", "Onions", "Jalapeno"]);
console.log(pizza3);

var pizza4 = pizzaOven("Hand Tossed", "Alfredo", ["Mozzerella", "Parmesan"], ["Chicken", "Banana Peppers",]);
console.log(pizza4);