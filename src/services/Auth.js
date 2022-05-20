import axios from "axios";

export function login(email, password) {
    return axios.post('/api/v1/users/login', {
        email,
        password
    });
}

export function logout() {
    localStorage.removeItem('user');
}

export function getHeaderToken() {
    return {
        headers: { Authorization: `Bearer ${localStorage.getItem('user') ?? ''}` }
    }
}
