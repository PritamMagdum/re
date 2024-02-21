// A mock function to mimic making an async request for data
export function addToCart(item) {
  return new Promise(async (resolve) => {
    const responce = await fetch('http://localhost:8080/cart', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json"
      }
    });
    const data = await responce.json();
    // TODO: On server it will only return some information of users (not password)
    resolve({ data });
  });
}