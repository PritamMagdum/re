// A mock function to mimic making an async request for data
export function createOrder(order) {
  return new Promise(async (resolve) => {
    const responce = await fetch("/orders/", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await responce.json();
    resolve({ data });
  });
}

export function updateOrder(order) {
  // console.log("order is -->", order);
  return new Promise(async (resolve) => {
    const responce = await fetch(`/orders/${order.id}`, {
      method: "PATCH",
      body: JSON.stringify(order),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await responce.json();
    resolve({ data });
  });
}

// export function fetchAllOrders(sort, pagination) {
export function fetchAllOrders(pagination) {
  let queryString = "";

  // for (let key in sort) {
  //   queryString += `${key}=${sort[key]}&`;
  // }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    // TODO : we will not hard-code server URL here
    const response = await fetch("/orders?" + queryString);
    // console.log("this is response ---->", response)
    const data = await response.json();
    // console.log("this is data ---->", data.items)
    const totalOrders = await response.headers.get("X-Total-Count");
    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  });
}
