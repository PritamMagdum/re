// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO : we will not hard-code server URL here
    const responce = await fetch('http://localhost:8080/products');
    const data = await responce.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  // TODO : On server we will support multi values
  // Suppose filter is comming like  {"category":"smartphone"}
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) => {
    // TODO : we will not hard-code server URL here
    const responce = await fetch('http://localhost:8080/products?' + queryString);
    const data = await responce.json();
    resolve({ data });
  });
}
