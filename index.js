const shopIcon = document.querySelector('#shop-icon')
const cart = document.querySelector ('.cart');

shopIcon.addEventListener('click', e => {
    cart.classList.toggle('show-cart');
});
