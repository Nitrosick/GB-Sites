Vue.component('catalog_comp', {
    data() {
        return {
            catalogItems: [],
            filtered: [],
            sexFilter: 'all',
            userSearch: '',
        };
    },

    methods: {
        filter(value, sex) {
            this.sexFilter = sex;
            if (value === '') {
                if (sex === 'all') {
                    this.filtered = Array.from(this.catalogItems);
                } else {
                    this.filtered = this.catalogItems.filter(el => el.sex === sex);
                }
            } else {
                let regexp = new RegExp(value, 'i');
                if (sex === 'all') {
                    this.filtered = this.catalogItems.filter(el => regexp.test(el.name));
                } else {
                    this.filtered = this.catalogItems.filter(el => regexp.test(el.name) && el.sex === sex);
                }
            }
        }
    },

    mounted(){
        this.$parent.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.catalogItems.push(el);
                    this.filtered.push(el);
                }
            });
    },

    template: `
    <div class="catalog wrapper">
        <ul class="catalog_categories">
            <li
            :class="{ link_active: sexFilter == 'all' }"
            @click="filter(userSearch, 'all')"
            >All</li>
            <li
            :class="{ link_active: sexFilter == 'man' }"
            @click="filter(userSearch, 'man')"
            >Mens</li>
            <li
            :class="{ link_active: sexFilter == 'woman' }"
            @click="filter(userSearch, 'woman')"
            >Womens</li>
            <li class="placeholder"></li>
            <li class="catalog_filter_box">
                <input
                type="text"
                id="catalog_filter"
                placeholder="Items filter..."
                v-model="userSearch"
                @input="filter(userSearch, sexFilter)"
                >
                <img class="search_icon" src="images/search_icon.png" alt="icon">
            </li>
        </ul>

        <div class="catalog_content">

            <catalog_item class="catalog_item"
            v-for="item of filtered"
            :key="Math.random()"
            :item="item"
            :image="item.img"
            ></catalog_item>

        </div>
    </div>
    `
});

Vue.component('catalog_item', {
    props: ['item', 'image'],

    data(){
        return {
            cartAPI: this.$root.$refs.header_comp.$refs.cart_comp,
        }
    },

    template: `
    <div class="catalog_item">
        <img :src="image" alt="item" width="420">
        <div class="catalog_item_price">
            <span class="euro" v-if="item.oldPrice != 0">£</span>
            <span class="old_price" v-if="item.oldPrice != 0">{{ item.oldPrice }}</span>
            <span class="euro">£</span>
            <span class="price_value">{{ item.price.toFixed(2) }}</span>

        </div>
        <div class="catalog_item_hover">
            <h3>{{ item.sex }}s {{ item.color }} {{ item.name }} £{{ item.price.toFixed(2) }}</h3>
            <p>Very good {{ item.name }} for {{ item.sex }} on the move.<br>100% {{ item.material }}</p>
            <div class="catalog_item_actions">
                <button class="buy_button" @click="cartAPI.addProduct(item)"> <i class="fas fa-shopping-cart"></i> </button>
                <button class="like_button"> <i class="far fa-heart"></i> </button>
                <button class="info_button"> <i class="fas fa-info"></i> </button>
            </div>
        </div>
    </div>
    `
});
