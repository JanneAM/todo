import axios from 'axios';

const url = 'https://todo-app12345.herokuapp.com/items';

export const fetchPosts = () => axios.get(url);
export const createItem = (newItem) => axios.post(url, newItem);
export const deleteItem = (id) => axios.delete(`${url}/${id}`);
export const checkItemDone = (id, itemDone) => axios.patch(`${url}/${id}`, itemDone);
