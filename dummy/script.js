let token = null;

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (res.ok) {
            token = data.token;
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('app').style.display = 'block';
            loadProducts();
        } else {
            document.getElementById('login-error').innerText = data.message || 'Login falhou.';
        }
    } catch (err) {
        document.getElementById('login-error').innerText = 'Erro ao tentar conectar.';
    }
}

async function loadProducts() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    const list = document.getElementById('product-list');
    list.innerHTML = '';

    data.products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description.slice(0, 60)}...</p>
      <p><strong>Estoque:</strong> ${product.stock}</p>
    `;
        div.onclick = () => {
            window.location.href = `produto.html?id=${product.id}`;
        };
        list.appendChild(div);
    });
}
