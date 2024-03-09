export function createUser(userData) {
  return new Promise(async (resolve) => {
    const responce = await fetch("/auth/signup", {
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

export function loginUser(userInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const responce = await fetch(`/auth/login`, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "content-type": "application/json",
        },
      });
      if (responce.ok) {
        const data = await responce.json();
        // console.log({ data });
        resolve({ data });
      } else {
        const error = await responce.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      const responce = await fetch("/auth/check");
      if (responce.ok) {
        const data = await responce.json();
        // console.log({ data });
        resolve({ data });
      } else {
        const error = await responce.text();
        reject(error);
      }
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
