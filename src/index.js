import createItem from "./services/itens.js";

const cart = [];

console.log("Welcome to your Shopee Cart!");

const item1 = await createItem("Hotwhell ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3);

console.log(item2.subtotal());