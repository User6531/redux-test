const menuLoaded = (newMenu) => {
    return {
        type : 'MENU_LOADED',
        payload: newMenu,
        loading: false,
    }
}
const menuLoading = () => {
    return {
        type : 'MENU_LOADING',
        loading: true,
    }
}
const menuError = () => {
    return {
        type : 'MENU_ERROR',
        error: true,
    }
}
const addItemToCart = (id) => {
    return {
        type : 'ADD_ITEM_TO_CART',
        payload: id,
    }
}
const delleteItemFromCart = (id) => {
    return {
        type : 'DELLETE_ITEM_FROM_CART',
        payload: id,
    }
}

export {
    menuLoaded,
    menuLoading,
    menuError,
    addItemToCart,
    delleteItemFromCart,
};