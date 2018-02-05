export const widgets = (state = [], { type, payload }) => {
    switch (type) {
        case 'ADD_WIDGETS':
            return payload;
        case 'CREATE_WIDGET':
            return [...state, payload];
        case 'UPDATE_WIDGET':
            return state.map(item => {
                return item.id === payload.id ? Object.assign({}, item, payload) : item;
            });
        case 'DELETE_WIDGET':
            return state.filter(item => {
                return item.id !== payload.id;
            });
        default:
            return state;
    }
};
//# sourceMappingURL=widgets.store.js.map