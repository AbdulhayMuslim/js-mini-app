async function fetchData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network Response Failed! ' + response.status);
      }
      const data = await response.json();
      const productsDiv = document.querySelector('.products');

      const html = data.map(product => `
        <div class="product">
          <h3>${product.title}</h3>
          <img src="${product.image}" width="100">
          <p>Price: $${product.price}</p>
          <button><i class="fa-solid fa-heart"></i></button>
        </div>
      `).join('');

      productsDiv.innerHTML = html;
      console.log(data);
    }
    
    catch (error) {
      console.error('Fetch Error: ', error);
    }
}

fetchData();