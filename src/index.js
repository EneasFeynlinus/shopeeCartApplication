import * as cartService from './services/cart.js'
import createItem from "./services/itens.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to your Shopee Cart!");

const item1 = await createItem("Hotwhell ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3);
//Adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.displayCart(myCart)
//Deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name)
// await cartService.deleteItem(myCart, item1.name)

console.log("Shopee Cart Total is: ");
await cartService.calculateTotal(myCart);