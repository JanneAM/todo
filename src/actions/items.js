import * as api from '../api';

export const getItems = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        
        dispatch({type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createItem = (item) => async (dispatch) =>{
    try {
        const { data } = await api.createItem(item);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

<<<<<<< HEAD
=======
export const deleteItem = (id) => async (dispatch) => {
    try {
        await api.deleteItem(id);

        dispatch({ type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}

>>>>>>> check-item-done
export const checkItemDone = (id, item) => async (dispatch) => {
    try {
        const { data } = await api.checkItemDone(id, item);

<<<<<<< HEAD
        dispatch({ type: 'CHECK_DONE', payload: data });
=======
        dispatch({ type:'CHECK_DONE', payload: data });
>>>>>>> check-item-done
    } catch (error) {
        console.log(error);
    }
}