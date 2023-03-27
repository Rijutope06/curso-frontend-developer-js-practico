const menuEmial = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const ShoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container')

menuEmial.addEventListener("click", toggleDestockMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
ShoppingCart.addEventListener("click", toggleShoppingCart);

function toggleDestockMenu() {
  const isProductDetailsClosed = productDetail.classList.contains("inactive");
  if (!isProductDetailsClosed) {
    productDetail.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isProductDetailsClosed = productDetail.classList.contains("inactive");

  if (!isProductDetailsClosed) {
    productDetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  //const isM = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  productDetail.classList.toggle("inactive");
}

const producList = [];
producList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

producList.push({
  name: "Pantalla",
  price: 240,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

producList.push({
  name: "Computador",
  price: 820,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


function porductListRender (arr) {
  for (product of producList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const productInfoDiv = document.createElement("div");
    const productName = document.createElement("p");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
  
    productInfoFigure = document.createElement("figure");
    productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
    productInfoFigure.appendChild(productImgCart)
  
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
  
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
  
    cardsContainer.appendChild( productCard)
  }
}

porductListRender(producList)
