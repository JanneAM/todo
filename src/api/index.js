import axios from 'axios';

const url = 'http://localhost:5000/items';

export const fetchPosts = () => axios.get(url);
export const createItem = (newItem) => axios.post(url, newItem);
export const checkItemDone = (id, updatedItem) => axios.patch(`${url}/${id}`, updatedItem);