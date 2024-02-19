// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO : we will not hard-code server URL here
    const responce = await fetch('http://localhost:8080/products');
    const data = await responce.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort) {
  // TODO : On server we will support multi values
  // Suppose filter is comming like  {"category":"smartphone"}
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}`
  }

  return new Promise(async (resolve) => {
    // TODO : we will not hard-code server URL here
    const responce = await fetch('http://localhost:8080/products?' + queryString);
    const data = await responce.json();
    resolve({ data });
  });
}
