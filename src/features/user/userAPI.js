// A mock function to mimic making an async request for data
export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const responce = await fetch(`http://localhost:8080/orders/user/${userId}`);
    const data = await responce.json();
    resolve({ data });
  });
}

export function fetchLoggedInUser() {
  return new Promise(async (resolve) => {
    const responce = await fetch(`http://localhost:8080/users/own`);
    const data = await responce.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const responce = await fetch(`http://localhost:8080/users/${update.id}`, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await responce.json();
    // TODO: On server it will only return some information of users (not password)
    resolve({ data });
  });
}
