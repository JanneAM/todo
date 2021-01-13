import axios from 'axios';

const url = 'http://localhost:5000/items';

export const fetchPosts = () => axios.get(url);
export const createItem = (newItem) => axios.post(url, newItem);
export const deleteItem = (id) => axios.delete(`${url}/${id}`);