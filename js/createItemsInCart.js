const cartItemsBody = document.getElementById("cart-items-body");
let cartEmptyImg = document.getElementById("cart-empty-img");
let createItemsInCart = (cart) => {
  cartEmptyImg.style.display = "none";
  const cartProduct = document.createElement("div");
  const cartItemRow = document.createElement("div");
  const cartCol1 = document.createElement("div");
  const cartImage = document.createElement("img");
  const cartCol2 = document.createElement("div");
  const cartCardBody = document.createElement("div");
  const cartProductHeader = document.createElement("div");
  const cartProductTitle = document.createElement("h6");
  const cartProductPrice = document.createElement("h5");
  const cartButtonOuter = document.createElement("div");
  const removeCart = document.createElement("a");

  cartProduct.classlist = "card product";
  cartItemRow.classList = "row";
  cartCol1.classList = "col-md-6";
  cartImage.classList = "card-img-top cart-item-img";
  cartCol2.classList = "col-md-6";
  cartCardBody.classList = "card-body";
  cartProductHeader.classList = "product-header";
  cartProductTitle.classList = "card-title";
  cartProductPrice.classList = "card-title product-price";
  cartButtonOuter.classList = "btn-outer";
  removeCart.classList = "btn btn-primary buy-btn";

  cartProduct.id = `product-${cart.id}`;

  cartProductTitle.innerText = `${cart.title.slice(0, 20)}...`;
  cartProductPrice.innerText = `$${cart.price}`;
  removeCart.innerText = "Remove Cart";
  cartImage.src = cart.image;
  cartImage.alt = "cart image";

  cartItemsBody.appendChild(cartProduct);
  cartProduct.appendChild(cartItemRow);
  cartItemRow.appendChild(cartCol1);
  cartCol1.appendChild(cartImage);
  cartItemRow.appendChild(cartCol2);
  cartCol2.appendChild(cartCardBody);
  cartCardBody.appendChild(cartProductHeader);
  cartProductHeader.appendChild(cartProductTitle);
  cartProductHeader.appendChild(cartProductPrice);
  cartCardBody.appendChild(cartButtonOuter);
  cartButtonOuter.appendChild(removeCart);

  removeCart.addEventListener("click", function () {
    cartItemsBody.removeChild(cartProduct);
    cartItem = cartItem.filter((cartItemId) => cartItemId != cart.id);
    cartItemsLength.innerText = cartItem.length;
    if (cartItem.length === 0) cartEmptyImg.style.display = "inline-block";

    let productColDiv = document.getElementById(`product-${cart.id}`);
    let requiredAddToCartButton =
      productColDiv.getElementsByClassName("add-to-cart-btn")[0];
    requiredAddToCartButton.innerHTML =
      '<i class="fa fa-cart-plus" aria-hidden="true"></i>';
    requiredAddToCartButton.classList.remove("disabled");
  });
};
{
  /* <div class="card product">
	<div class="row">
		<div class="col-md-6">
			<img class="card-img-top cart-item-img" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
				alt="product-img">
		</div>
		<div class="col-md-6">
			<div class="card-body">
				<div class="product-header">
					<h6 class="card-title">Fjallraven - Foldsac...</h6>
					<h5 class="card-title product-price">$109.95</h5>
				</div>
				<div class="btn-outer">
				<a class="btn btn-primary buy-btn">Remove from cart</a></div>
			</div>
		</div>
	</div>
</div> */
}
