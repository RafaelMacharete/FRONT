function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

async function fetchProduct(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await res.json();

    const container = document.getElementById('product-details');
    container.innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.thumbnail}" alt="${product.title}">
    <p><strong>Descrição:</strong> ${product.description}</p>
    <p><strong>Preço:</strong> $${product.price}</p>
    <p><strong>Estoque:</strong> ${product.stock}</p>
    <p><strong>Marca:</strong> ${product.brand}</p>
    <p><strong>Categoria:</strong> ${product.category}</p>
  `;
}

const id = getIdFromUrl();
if (id) {
    fetchProduct(id);
} else {
    document.getElementById('product-details').innerText = 'Produto não encontrado.';
}
