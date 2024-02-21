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


export function checkUser(userInfo) {
  return new Promise(async (resolve, reject) => {
    const email = userInfo.email
    const password = userInfo.password
    const responce = await fetch(`http://localhost:8080/users?email=${email}`);
    const data = await responce.json();
    console.log(data);
    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "wrong credentials" })
      }
    } else {
      reject({ message: "User Not Found" })
    }
  });
}