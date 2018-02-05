export const selectedWidget = (state = null, { type, payload }) => {
    switch (type) {
        case 'SELECT_WIDGET':
            return payload;
        default:
            return state;
    }
};
//# sourceMappingURL=selectedWidget.store.js.map