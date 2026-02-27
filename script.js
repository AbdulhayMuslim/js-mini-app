async function fetchData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network Response Failed! ' + response.status);
      }
      const data = await response.json();
      console.log(data);
    }
    
    catch (error) {
      console.error('Fetch Error: ', error);
    }
}