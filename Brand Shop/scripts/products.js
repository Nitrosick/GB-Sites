"use strict";

const catalog = {
    products: [
        {name: 'jacket', brand: 'mango people', price: 50, sex: 'man', photo: 'jacket_mango_black', id: 1},
        {name: 'coat', brand: 'mango people', price: 68, sex: 'man', photo: 'coat_mango_black', id: 2},
        {name: 'windbreaker', brand: 'mango people', price: 49, sex: 'man', photo: 'windbreaker_mango_blue', id: 3},
        {name: 't-shirt', brand: 'mango people', price: 12, sex: 'man', photo: 't-shirt_mango_grey', id: 4},
        {name: 'hoodie', brand: 'mango people', price: 48, sex: 'man', photo: 'hoodie_mango_blue', id: 5},
        {name: 'rugby', brand: 'mango people', price: 60, sex: 'man', photo: 'rugby_mango_blue_white', id: 6},
        {name: 'blazer', brand: 'mango people', price: 68, sex: 'man', photo: 'blazer_mango_silver', id: 7},
        {name: 'jacket', brand: 'mango people', price: 70, sex: 'man', photo: 'jacket_mango_black_1', id: 8},
        {name: 't-shirt', brand: 'mango people', price: 12, sex: 'man', photo: 't-shirt_mango_blue', id: 9},
        {name: 'sweater', brand: 'mango people', price: 35, sex: 'man', photo: 'sweater_mango_white_black', id: 10},
        {name: 't-shirt', brand: 'mango people', price: 10, sex: 'man', photo: 't-shirt_mango_white', id: 11},
        {name: 'shirt', brand: 'mango people', price: 19, sex: 'man', photo: 'shirt_mango_red', id: 12},

        {name: 'blouse', brand: 'mango people', price: 17, sex: 'woman', photo: 'blouse_mango_red', id: 13},
        {name: 'dress', brand: 'mango people', price: 25, sex: 'woman', photo: 'dress_mango_white', id: 14},
        {name: 'dress', brand: 'mango people', price: 28, sex: 'woman', photo: 'dress_mango_white_black', id: 15},
        {name: 'hoodie', brand: 'benetton', price: 36, sex: 'woman', photo: 'hoodie_benetton_grey', id: 16, recomended: true},
        {name: 'pants', brand: 'zara', price: 35, sex: 'woman', photo: 'pants_zara_biege', id: 17, recomended: true},
        {name: 'pants', brand: 'zara', price: 37, sex: 'woman', photo: 'pants_zara_black', id: 18, recomended: true},
        {name: 'skirt', brand: 'benetton', price: 29, sex: 'woman', photo: 'skirt_benetton_pink_black', id: 19, recomended: true},
        {name: 'shirt', brand: 'mango', price: 22, sex: 'woman', photo: 'shirt_mango_grey', id: 20},
        {name: 'shirt', brand: 'mango', price: 22, sex: 'woman', photo: 'shirt_mango_green', id: 21},
    ],
    catalogField: null,
    cartButtons: null,

    createItem(obj) {
        let item = `
            <li class="item-box">
                <img class="good-photo" src="images/goods/${obj.photo}.jpg" alt="${obj.brand} ${obj.name}">
                <div class="overlay">
                    <div class="add-to-cart" id="${obj.id}"> <img src="images/cart.png" alt="cart"> <span>Add to Cart</span> </div>
                </div>
                <div class="good-text"> <span>${obj.brand} ${obj.name}</span> <span>$${obj.price}.00</span> </div>
            </li>
        `;
        return item;
    },

    getBuyButtons() {
        this.cartButtons = document.querySelectorAll('.add-to-cart');
    },

    itemsRender(type) {
        if (type != 'random') {
            for (let p of this.products) {
                if (type === 'recomended' && p.recomended) {
                    this.catalogField.insertAdjacentHTML('beforeend', this.createItem(p));
                } else if (p.sex === type) {
                    this.catalogField.insertAdjacentHTML('beforeend', this.createItem(p));
                }
            }
        } else {
            for (let i of this.getRandomItems()) {
                this.catalogField.insertAdjacentHTML('beforeend', this.createItem(this.products[i]));
            }
        }
    },

    getRandomItems() {
        let numbers = [];
        while (numbers.length < 8) {
            let random = parseInt(Math.random() * this.products.length);
            if (!numbers.includes(random)) numbers.push(random);
        }
        return numbers;
    },

    eventHandler() {
        document.addEventListener('click', event => {
            for (let b of this.cartButtons) {
                if (event.target === b || event.target.parentNode === b) {
                    alert(`В корзину добавлен товар с id ${b.id}`);
                }
            }
        });
    },

    init(type) {
        this.catalogField = document.querySelector('.featured-items');
        this.itemsRender(type);
        this.getBuyButtons();
        this.eventHandler();
    },
};
