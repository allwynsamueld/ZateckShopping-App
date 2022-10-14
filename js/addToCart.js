const cartItemsLength = document.getElementById("cart-items-length");
const cart = document.getElementById("cart");
let cartItem = [];

const addToCart = (id) => {
  cartItem.push(id);
  cartItemsLength.innerText = cartItem.length;
  let cart = globalProducts.find((product) => product.id == id);
  createItemsInCart(cart);
};
