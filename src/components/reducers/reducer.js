const initialState = {
    menu: [],
    loading: true,
    error: false,
    itemsCart: [],
    totalPrice: 0,
    amount: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED' :
            return  {
                ...state,
                menu: action.payload,
                loading: action.loading,
            };
        case 'MENU_LOADING': 
            return ({
                ...state,
                loading: action.loading,
            });
        case 'MENU_ERROR': 
            return ({
                ...state,
                error: action.error,
            })
        case 'ADD_ITEM_TO_CART': 
            const addItem = [];
            state.menu.map(item => {
                if (item.id === action.payload) {
                    addItem.push(item)
                }
                return []
            });
            
            return {
                ...state,
                totalPrice: state.totalPrice + addItem[0].price,
                itemsCart: [
                    ...state.itemsCart,
                    ...addItem
                ]
            }
        case 'DELLETE_ITEM_FROM_CART': 
            const removeItem = [];
            let priceRemoveItem;
            state.itemsCart.map(item => {
                if (item.id !== action.payload) {
                    removeItem.push(item)
                } else {
                    priceRemoveItem = item.price;
                }
                return []
            });
            console.log(removeItem);
            return {
                ...state,
                totalPrice: state.totalPrice - priceRemoveItem,
                itemsCart: [
                    ...removeItem
                ]
            }
        default:  
            return state;
    }
}

export default reducer;