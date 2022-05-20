import axios from "axios";

export function setUser(token) {
    localStorage.setItem('user', token);
}

export function getUser() {
    return localStorage.getItem('user');
}

export function register({ firstname, lastname, email, password }) {
    return axios.post('/api/v1/users/register', {
        email,
        password,
        firstname,
        lastname
    });
}