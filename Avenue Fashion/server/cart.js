const add = (cart, req) => {
    cart.push(req.body);
    return {name: req.body.name, newCart: JSON.stringify(cart, null, 4)};
};

const change = (cart, req) => {
    const find = cart.find(el => el.id === +req.params.id);
    find.count += req.body.count;
    return {name: find.name, newCart: JSON.stringify(cart, null, 4)};
};

/**
 * Добавили новый метод удаления
 * @param cart
 * @param req
 * @returns {{newCart: *, name: *}}
 */
const remove = (cart, req) => {
    const find = cart.find(el => el.id === +req.params.id);
    cart.splice(cart.indexOf(find), 1);
    return {name: find.name, newCart: JSON.stringify(cart, null, 4)};
};

module.exports = {
    add,
    change,
    remove,
};
