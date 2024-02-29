export function createUser(userData) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await responce.json();
    // TODO: On server it will only return some information of users (not password)
    resolve({ data });
  });
}

export function checkUser(userInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const responce = await fetch(`http://localhost:8080/auth/login`, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "content-type": "application/json",
        },
      });
      if (responce.ok) {
        const data = await responce.json();
        console.log({ data });
        resolve({ data });
      }
      //  else {
      //   const error = await responce.json();
      //   reject(error);
      // }
    } catch (error) {
      reject(error);
    }
  });
}

export function signOut(userid) {
  return new Promise(async (resolve) => {
    // TODO : On server remove loggedin user info from session
    resolve({ data: "success" });
  });
}
