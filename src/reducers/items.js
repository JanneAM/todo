export default (items = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...items, action.payload];
        case 'CHECK_DONE':
            return items.map((item) => item._id === action.payoload._id ? action.payload : item);
        default:
            return items;
    }
}