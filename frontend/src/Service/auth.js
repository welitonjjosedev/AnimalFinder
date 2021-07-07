import axios from "axios"
const url = "http://165.22.39.246"


const loginAuth = (data) => {
  axios.post(url +'/api/auth/auth', {owner: data})
  .then(function (response) {
    localStorage.setItem('token', response.data.owner.authentication_token)
    localStorage.setItem('email', response.data.owner.email)
    window.location.href="/"
  })
  .catch(function (error) {
    console.log(error);
  })
}


export const registerAuth = (data) => {
  axios.post(url +'/api/auth/register', {owner: data})
  .then(function (response) {
    localStorage.setItem('token', response.data.owner.authentication_token)
    localStorage.setItem('email', response.data.owner.email)
    window.location.href="/"
  })
  .catch(function (error) {
    console.log(error);
  })
}

