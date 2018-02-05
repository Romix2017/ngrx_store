export const selectedItem = (state = null, { type, payload }) => {
    switch (type) {
        case 'SELECT_ITEM':
            return payload;
        default:
            return state;
    }
};
//# sourceMappingURL=selectedItem.store.js.map