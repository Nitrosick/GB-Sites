"use strict";

const burger = {
    burgers: [
        {type: 'small', price: 50, calories: 20},
        {type: 'big', price: 100, calories: 40}
    ],

    makeBurger(bur, sc, dod = 'none') {
        let price = 0;
        let calories = 0;

        for (let b of this.burgers) {
            if (b.type === bur) {
                price += b.price;
                calories += b.calories;
            }
        }

        let sauceInfo = sauce.getSauce(sc);
        let dodatkaInfo = dodatka.getDodatka(dod);

        price += sauceInfo[0] + dodatkaInfo[0];
        calories += sauceInfo[1] + dodatkaInfo[1];

        this.getBurgerInfo(price, calories);
    },

    getBurgerInfo(price, calories) {
        console.log(`Ваш бургер стоит ${price}₽ и содержит ${calories} калорий.`);
    }
};

const sauce = {
    sauces: [
        {type: 'cheese', price: 10, calories: 20},
        {type: 'salad', price: 20, calories: 5},
        {type: 'potato', price: 15, calories: 10}
    ],

    getSauce(type) {
        for(let s of this.sauces) {
            if (s.type === type) {
                return [s.price, s.calories];
            }
        }
    }
};

const dodatka = {
    dodatki: [
        {type: 'clove', price: 15, calories: 0},
        {type: 'mayonnaise', price: 20, calories: 5},
    ],

    getDodatka(type) {
        if (type != 'none') {
            for(let d of this.dodatki) {
                if (d.type === type) {
                    return [d.price, d.calories];
                }
            }
        } else {
            return [0,0];
        }
    }
};

burger.makeBurger('small', 'cheese', 'mayonnaise');
burger.makeBurger('big', 'salad');
