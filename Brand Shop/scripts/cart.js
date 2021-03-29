"use strict";

class Cart {
    #items;
    #itemsData;
    deleteButtons;
    deleteDropButtons;

    constructor(container = '.items-in-cart') {
        this.container = document.querySelector(container);
        this.subTotal = document.querySelector('.sub-total');
        this.grandTotal = document.querySelector('.grand-total');
        this.totalDrop = document.querySelector('.total-price-drop');
        this.clearCartButton = document.querySelector('.clear-cart');
        this.#items = [];
        this.#itemsData = [];

        this.#getAllItems();
        this.eventHandler();
    };

    #getAllItems() {
        // Метод получает массив всех товаров из базы данных
        // Пока берем массив из другого файла

        for (let p of catalog.products) {
            this.#itemsData.push(p);
        }
    };

    #getCartHeader(table) {
        table.insertAdjacentHTML('beforeend',
        `<tr>
        <th colspan="2">PRODUCT DETAILS</th>
        <th>UNITE PRICE</th>
        <th>QUANTITY</th>
        <th>SHIPPING</th>
        <th>SUBTOTAL</th>
        <th>ACTION</th>
        </tr>`
        );
    };

    #cartRender() {
        this.container.innerHTML = '';
        this.#getCartHeader(this.container);

        for (let i=0; i<this.#items.length; i++) {
            this.container.insertAdjacentHTML('beforeend', new CartItem(this.#items[i]).itemRender(i));
        }

        this.deleteButtons = document.querySelectorAll('.cart-delete-button i');
        this.deleteDropButtons = document.querySelectorAll('.drop-delete-button i');
        this.cartItemsCount();
    };

    #cartDropRender() {
        let container = document.querySelector('.items-in-cart-drop');
        container.innerHTML = '';

        for (let i=0; i<this.#items.length; i++) {
            container.insertAdjacentHTML('beforeend', new CartItem(this.#items[i]).itemRenderDrop(i));
        }
    };

    #cartRefresh() {
        this.#cartRender();
        this.#cartDropRender();
        this.#refreshTotal();
        this.cartItemsCount();
    };

    #refreshTotal() {
        const subtotalFields = document.querySelectorAll('.good-in-cart .subtotal');
        let total = 0;
        for (let s of subtotalFields) {
            total += +s.textContent.substr(1);
        }
        this.subTotal.textContent = `$${total}`;
        this.grandTotal.textContent = `$${total}`;
        this.totalDrop.textContent = `$${total}.00`;
    };

    changeQuantity(i) {
        const quantityFields = document.querySelectorAll('.good-in-cart .quantity');
        const subtotalFields = document.querySelectorAll('.good-in-cart .subtotal');
        const prices = document.querySelectorAll('.good-in-cart .unite-price');
        const countInDrop = document.querySelectorAll('.count-price i');

        subtotalFields[i].innerHTML = `$${quantityFields[i].value * prices[i].textContent.substr(1)}`;
        countInDrop[i].textContent = quantityFields[i].value;
        this.#refreshTotal();
    };

    deleteItem(i) {
        this.#items.splice(i, 1);
        this.#cartRefresh();
    };

    clearCart() {
        this.#items = [];
        this.#cartRefresh();
    };

    cartItemsCount() {
        let cartCount = document.querySelector('.cart-count-mark');
        if (this.#items.length === 0) {
            cartCount.style.display = 'none';
        } else {
            cartCount.style.display = 'block';
            cartCount.textContent = this.#items.length;
        }
    };

    putToCart(item) {
        // Метод должен отрабатывать, когда в любом месте сайта нажата кнопка "Add to cart"
        this.#items.push(item);
        this.#cartRefresh();
    };

    eventHandler() {
        document.addEventListener('input', event => {
            if (event.target.className === 'quantity') this.changeQuantity(event.target.dataset.id);
        });

        document.addEventListener('click', event => {
            if (event.target.className.includes('cart-delete-button') ||
                event.target.className.includes('drop-delete-button')) this.deleteItem(event.target.dataset.id);

            if (event.target === this.clearCartButton) {
                this.clearCart();
            }
        });
    };
}

class CartItem {
    constructor(item) {
        this.name = item.name;
        this.brand = item.brand;
        this.price = item.price;
        this.sex = item.sex;
        this.photo = item.photo;
        this.id = item.id;
    };

    itemRender(i) {
        return `
        <tr class="good-in-cart">
            <td><img class="cart-image" src="images/goods/${this.photo}.jpg" alt="item image"></td>
            <td class="item-name">
                <h2>${this.brand} ${this.name}</h2>
                <span>Color:</span>
                <span class="thin">${this.photo.split('_')[2]}</span> <br>
                <span>Size:</span>
                <span class="thin">XL</span>
            </td>
            <td class="unite-price">$${this.price}</td>
            <td><input data-id="${i}" type="number" class="quantity" min="1" max="50" value="1"></td>
            <td>FREE</td>
            <td class="subtotal">$${this.price}</td>
            <td><i data-id="${i}" class="fas fa-times-circle cart-delete-button"></i></td>
        </tr>
        `;
    };

    itemRenderDrop(i) {
        return `
        <div class="item-in-cart">
            <img class="item-img" src="images/goods/${this.photo}.jpg" alt="item image" width="80">
            <section class="cart-item-info">
                <h3>${this.name}</h3>
                <div>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <span class="count-price"><i>1</i>&nbsp;&nbsp;x&nbsp;&nbsp;$${this.price}</span>
            </section>
            <div class="delete-button">
                <i data-id="${i}" class="fas fa-times-circle drop-delete-button"></i>
            </div>
        </div>
        `;
    };
}

const cart = new Cart();

// Симуляция добавления товаров
cart.putToCart(catalog.products[0]);
cart.putToCart(catalog.products[1]);
cart.putToCart(catalog.products[2]);
