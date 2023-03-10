const menuEmial = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const ShoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

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
