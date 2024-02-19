// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO : we will not hard-code server URL here
    const responce = await fetch('http://localhost:8080/products');
    const data = await responce.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  // TODO : On server we will support multi values
  // Suppose filter is comming like  {"category":"smartphone"}
  // filter : {"category" : ["smartphone", "Laptops"]}
  // pagination : {_page:1, _limit:10}

  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`
  }

  return new Promise(async (resolve) => {
    // TODO : we will not hard-code server URL here
    const responce = await fetch('http://localhost:8080/products?' + queryString);

    // console.log("this is response ---->", responce)

    const data = await responce.json();

    // console.log("this is data ---->", data)
    resolve({ data });
  });
}
