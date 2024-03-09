// A mock function to mimic making an async request for data
// export function addToCart(item) {
//   return new Promise(async (resolve) => {
//     console.log("Before -->",item)

//     const dataToSend = {
//       ...item.product,
//       quantity: item.quantity,
//       user: item.user
//     };

//     const responce = await fetch('/cart', {
//       method: 'POST',
//       body: JSON.stringify(dataToSend),
//       headers: {
//         "content-type": "application/json"
//       }
//     });
//     const data = await responce.json();
//     console.log("After ---> ",data)
//     // TODO: On server it will only return some information of users (not password)
//     resolve({ data });
//   });
// }

export function addToCart(item) {
  return new Promise(async (resolve) => {
    // console.log("Before Add --> ", item);
    // console.log("product --> ", ...item.product);

    // const sendData = {
    //   product: item.product,
    //   quantity: item.quantity,
    //   user: item.user,
    // };
    // console.log("item is -->", item);
    // console.log("Before send --> ", item);
    const response = await fetch("/cart/", {
      method: "POST",
      // body: JSON.stringify(item),
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
      },
    });

    // const responseData = await response.json();
    const data = await response.json();

    // const data = {
    //   ...item.product,
    //   // id: responseData.id,
    //   quantity: item.quantity,
    //   user: item.user
    // };

    // console.log("Affter Add --> ", data);
    // Resolve with the merged data
    resolve({ data });
  });
}

export function fetchItemsByUserId() {
  return new Promise(async (resolve) => {
    // console.log("fetched userId -->", userId);
    // TODO : we will not hard-code server URL here
    const responce = await fetch(`/cart`);
    const data = await responce.json();
    // console.log("comes fetchItemsById ->", data);
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    // console.log("Before send --> ", update.id);
    const response = await fetch(`/cart/${update.id}`, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {
        "content-type": "application/json",
      },
    });

    const newData = await response.json();
    // console.log("After send --> ", newData);
    // Resolve with the merged data
    resolve(newData);
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    // console.log("Before send --> ", sendData);
    // console.log("Deleted itemId: -->", itemId);
    const response = await fetch(`/cart/${itemId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    // Resolve with the merged data
    resolve({ data: { id: itemId } });
  });
}

export function resetCart() {
  // console.log("resetCart userId -->", userId);
  // get all the items of user and then delete each item
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId();
    const items = await response.data;
    // console.log("responseed by fetchItemByUserId -->", items);
    items.forEach((item) => {
      // console.log("HERE IS THE ISSUE -->", item.id);
      setTimeout(() => {
        deleteItemFromCart(item.id);
      }, 50);
    });

    // for (let item in items) {
    //   console.log("HERE IS THE ISSUE -->", item);
    //   await deleteItemFromCart(item);
    // }
    resolve({ status: "success" });
  });
}
