// Simple JavaScript for adding products to cart
let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(`${product} has been added to your cart!`);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(`Natural Color ${index + 1}`);
    });
});
