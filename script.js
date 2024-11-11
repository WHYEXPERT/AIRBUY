let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));
        
        // Dodaj produkt do koszyka
        cart.push({ name: productName, price: productPrice });
        
        // Aktualizuj zawartość koszyka
        updateCart();
    });
});

document.getElementById('proceed-to-payment').addEventListener('click', function() {
    if (cart.length === 0) {
        alert("Twój koszyk jest pusty!");
        return;
    }
    // Przejdź do strony płatności
    window.location.href = 'payment.html';
});

function updateCart() {
    const cartContent = document.getElementById('cart-content');
    if (cart.length === 0) {
        cartContent.innerHTML = '<p>Twój koszyk jest pusty.</p>';
    } else {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        const itemsList = cart.map(item => `<p>${item.name}: ${item.price} ZŁ</p>`).join('');
        cartContent.innerHTML = itemsList + `<p><strong>Łączna kwota: ${total} ZŁ</strong></p>`;
    }
}

