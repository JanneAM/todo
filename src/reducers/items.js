export default (items = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...items, action.payload];
        case 'DELETE':
            return items.filter((item) => item._id !== action.payload._id ? action.payload : item);
        case 'CHECK_DONE':{
            return items.map((item)=> item._id === action.payload._id ? action.payload : item);
        }
        default:
            return items;
    }
}