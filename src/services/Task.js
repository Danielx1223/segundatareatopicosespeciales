import axios from "axios";
import { getHeaderToken } from "./Auth";

export function getAllTasks() {
    return axios.get('/api/v1/tasks/', getHeaderToken());
}

export function createTask(description) {
    return axios.post(
        '/api/v1/tasks/',
        { description },
        getHeaderToken()
    );
}

export function updateTask(id, description) {
    return axios.put(
        '/api/v1/tasks/' + id,
        { description },
        getHeaderToken()
    );
}

export function deleteTask(id) {
    return axios.delete('/api/v1/tasks/' + id, getHeaderToken());
}