//quais ações meu carrinho pode fazer
// ✔ adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}
// deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1){
        userCart.splice(index, 1)
    }
}

async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) =>{
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    })
}
// remover um item
async function removeItem (userCart, item) {
    //1- Encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    //2. Caso não encontre o item
    if(indexFound == -1) {
        console.log("item não encontrado")
        return;
    }
    //3. item > 1 subtrair um item, item = 1 deletar o item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return
    }

    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1)
        return
    }
}
// calcula o total do carrinho
async function calculateTotal(userCart) {
    console.log("\nShopee Cart Total is: ");

    const result = userCart.reduce((total,item) => total + item.subtotal(),0);
    console.log(`🛒Total: ${result}`)
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}
