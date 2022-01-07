const API = 'http://localhost:8000/api';
const HEADERS = {
  'Content-Type': 'application/json;charset=utf-8',
};

export const Auth = {
  authorize: async ({ email, password }) => {
    try {
      const response = await fetch(`${API}/login`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem('token', data.token);
        return data.user;
      }
    } catch (error) {
      throw error;
    }
  },
};

// static user = async (user, url) => {
//   const rawResponse = await fetch(this.homeApi + url, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)
//   });
//   const content = await rawResponse.json();
//   return content;
// };

// export const Register = async (user) => {
//   try {
//     const response = await fetch(`${API}/register`, {
//         method: 'POST',
//         headers: HEADERS,
//         body: JSON.stringify(user),
//         credentials: 'same-origin',
//     })
//     if (response.ok) {
//         const data = await response.json();
//         return data;
//     }
//   } catch (error) {
//     throw error
//   }
// }

export const Register = async (user) => {
  try {
    const response = await fetch(`${API}/register`, {
      method: 'POST',
      vary: 'Origin,Access-Control-Request-Method',
      body: JSON.stringify(user),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const Trainings = async () => {
  try {
    const response = await fetch(`${API}/trainings`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    throw error;
  }
};
