// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO : we will not hard-code server URL here
    const responce = await fetch("/products");
    const data = await responce.json();
    resolve({ data });
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    // TODO : we will not hard-code server URL here
    // const responce = await fetch(`/products?id=${id}`);
    const responce = await fetch(`/products/${id}`);
    const data = await responce.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    // TODO : we will not hard-code server URL here
    const responce = await fetch(`/products/`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await responce.json();
    resolve({ data });
  });
}

export function updateProduct(update) {
  // console.log("This is updateProduct -->", update);
  return new Promise(async (resolve) => {
    // console.log("Before send --> ", sendData);
    const response = await fetch(`/products/${update.id}`, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {
        "content-type": "application/json",
      },
    });

    const newData = await response.json();

    // Resolve with the merged data
    resolve(newData);
  });
}

export function deleteProduct(deleted) {
  // console.log("This is updateProduct -->", deleted);
  return new Promise(async (resolve) => {
    // console.log("Before send --> ", sendData);
    const response = await fetch(`/products/${deleted}`, {
      method: "DELETE",
      // body: JSON.stringify(deleted),
      // headers: {
      //   "content-type": "application/json",
      // },
    });

    const newData = await response.json();

    // Resolve with the merged data
    resolve(newData);
  });
}

export function fetchProductsByFilters(filter, sort, pagination, admin) {
  // TODO : On server we will support multi values
  // Suppose filter is comming like  {"category":"smartphone"}
  // filter : {"category" : ["smartphone", "Laptops"]}
  // pagination : {_page:1, _per_page:10}

  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  if (admin) {
    queryString += `admin=true`;
  }

  return new Promise(async (resolve) => {
    // TODO : we will not hard-code server URL here
    const response = await fetch("/products?" + queryString);
    // console.log("this is response ---->", response)
    const data = await response.json();
    // console.log("this is data ---->", data.items)
    // const totalItems = await data.items;
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("/categories");
    // console.log("This response is categories ----->", response)
    const data = await response.json();
    // console.log(data);
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    // const response2 = await fetch("http;//localhost:8080/brands");
    const response = await fetch("/brands");
    // console.log("This response is brands ----->", response)
    const data = await response.json();
    // console.log("This data is comes from API -", data);
    resolve({ data });
  });
}

export function fetchFilters() {
  return new Promise(async (resolve) => {
    // const response2 = await fetch("http;//localhost:8080/brands");
    const response = await fetch("/filters");
    // console.log("This response is brands ----->", response)
    const data = await response.json();
    // console.log("This data is comes from API -", data);
    resolve({ data });
  });
}
