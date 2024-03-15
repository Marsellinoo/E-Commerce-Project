function searchProducts() {
    var input = document.getElementById('searchInput').value.toUpperCase();
    var products = document.querySelectorAll('.content');

    for (var i = 0; i < products.length; i++) {
        var productName = products[i].getElementsByClassName('des')[0].getElementsByTagName('h5')[0];
        var productSpan = products[i].getElementsByClassName('des')[0].getElementsByTagName('span')[0];
        var productText = productName.textContent || productName.innerText;
        var spanText = productSpan.textContent || productSpan.innerText;

        if (productText.toUpperCase().indexOf(input) > -1 || spanText.toUpperCase().indexOf(input) > -1) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
}

document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchProducts();
    }
});

