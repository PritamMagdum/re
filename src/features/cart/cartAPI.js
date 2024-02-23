// A mock function to mimic making an async request for data
// export function addToCart(item) {
//   return new Promise(async (resolve) => {
//     console.log("Before -->",item)

//     const dataToSend = {
//       ...item.product,
//       quantity: item.quantity,
//       user: item.user
//     };

//     const responce = await fetch('http://localhost:8080/cart', {
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
    console.log("Before Add --> ", item);
    console.log("product --> ", ...item.product);

    const sendData = {
      ...item.product,
      quantity: item.quantity,
      user: item.user,
    };

    console.log("Before send --> ", sendData);
    const response = await fetch("http://localhost:8080/cart", {
      method: "POST",
      // body: JSON.stringify(item),
      body: JSON.stringify(sendData),
      headers: {
        "content-type": "application/json",
      },
    });

    // const responseData = await response.json();
    const newData = await response.json();

    // const data = {
    //   ...item.product,
    //   // id: responseData.id,
    //   quantity: item.quantity,
    //   user: item.user
    // };

    console.log("Affter Add --> ", newData);
    // Resolve with the merged data
    resolve(newData);
  });
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    // TODO : we will not hard-code server URL here
    const responce = await fetch(`http://localhost:8080/cart?user=${userId}`);
    const data = await responce.json();
    console.log("comes fetchItemsById ->", data);
    resolve({ data });
  });
}
