import { showAlert } from './alerts';
import axios from 'axios';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 2000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });
    if (res.data.status === 'success') {
      //location.reload(true);
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};

// export const signup = async (name, email, password, passwordConfirm) => {
//   try {
//     const resultSignup = await axios({
//       method: 'POST',
//       url: '/api/v1/users/signup',
//       data: {
//         name,
//         email,
//         password,
//         passwordConfirm,
//       },
//     });
//     if (resultSignup.data.status === 'success') {
//       alert('logged in successfully');
//       window.setTimeout(() => {
//         location.assign('/');
//       }, 1500);
//     }
//   } catch (err) {
//     alert(err.response.data.message);
//   }
// };
