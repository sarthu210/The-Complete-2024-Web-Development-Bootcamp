const cart = ["add"];

const chekOut = createOrder(cart);

chekOut.then((orderId) => {
    return console.log(orderId);
})
.catch((err) => {
    return console.log(err);
})


function createOrder(cart){
    const chekCart = new Promise((resolve,reject) => {
        if(!validCart(cart)){
            const err = "Cart is empty";
            reject(err);
        }

        const cartId = 1234;

        if(cartId){
            resolve(cartId);
        }
    }) 

    return chekCart;
}

function validCart(cart) {
    if(cart.length == 0){
        return false;
    }
    else{
        return true;
    }
}
