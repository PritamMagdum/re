export function createUser(userData) {
  return new Promise(async (resolve) => {
    const responce = await fetch('http://localhost:8080/users', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json"
      }
    });
    const data = await responce.json();
    // TODO: On server it will only return some information of users (not password)
    resolve({ data });
  });
}
