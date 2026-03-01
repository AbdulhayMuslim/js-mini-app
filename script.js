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
          <button class="favbtn"><i class="fa-solid fa-heart"></i></button>
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

document.addEventListener("click", function (e) {
  if (e.target.closest(".favbtn")) {
    const button = e.target.closest(".favbtn");
    button.classList.toggle("active");
    const favProducts = [];
    favProducts.push(product);
    console.log(favProducts);
  }
});

const favCatBtn = document.getElementById("favcategory");
favCatBtn.addEventListener("click", () => {
  //should display fovorite icons only
});