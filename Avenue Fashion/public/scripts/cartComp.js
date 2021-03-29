Vue.component('cart_comp', {
    data() {
        return {
            itemsInCart: [],
            total: 0,
        };
    },

    methods: {
        addProduct(product){
            let find = this.itemsInCart.find(el => el.id === product.id);
            if(find){
                this.$root.putJson(`/api/cart/${find.id}`, {count: 1});
                find.count++;
                this.total = this.setTotal();
            } else {
                let prod = Object.assign({count: 1}, product);
                this.$root.postJson('/api/cart', prod)
                  .then(data => {
                      if (data.result === 1) {
                          this.itemsInCart.push(prod);
                      }
                      this.total = this.setTotal();
                  });
            }
        },

        remove(item, del) {
            if (item.count > 1 && !del) {
                this.$root.putJson(`/api/cart/${item.id}`, {count: -1});
                item.count--;
                this.total = this.setTotal();
            } else {
                this.$root.deleteJson(`/api/cart/${item.id}`)
                .then(data => {
                    if(data.result === 1) this.itemsInCart.splice(this.itemsInCart.indexOf(item), 1);
                    this.total = this.setTotal();
                });
            }
        },

        setTotal() {
            let total = 0;
            this.itemsInCart.forEach(el => {
                total += el.price * el.count;
            });
            return total.toFixed(2);
        },
    },

    mounted(){
        this.$root.getJson('/api/cart')
            .then(data => {
                for(let el of data){
                    this.itemsInCart.push(el);
                }
                this.total = this.setTotal();
            });
    },

    template: `
    <div href="#" class="top_header_cart">
        <i class="fas fa-shopping-cart"></i>
        <span class="cart_status" v-if="!itemsInCart.length">empty</span>
        <span class="cart_status" v-else>£{{ total }}</span>
        <img class="cart_arrow_bottom" src="images/arrow_white.png" alt="icon" width="8">
        <div class="cart_block">

            <cart_item class="item_in_cart"
            v-for="item of itemsInCart"
            :key="Math.random()"
            :item="item"
            :image="item.img"
            @remove="remove"
            @add="addProduct"
            ></cart_item>

            <div class="cart_block_sales">
                <h2>Autumn Sale!</h2>
                <span>Up to 50% Off</span>
            </div>
        </div>
    </div>
    `
});

Vue.component('cart_item', {
    props: ['item', 'image'],

    template: `
    <div class="item_in_cart">
        <img :src="image" alt="item" width="150">
        <div class="item_in_cart_info">
            <h2>{{ item.name }}</h2>
            <h3>{{ item.brand }}</h3>
            <div class="placeholder"></div>
            <span class="price_and_count">£{{ item.price.toFixed(2) }} x {{ item.count }}</span>
            <div class="item_count_control">
                <button class="item_count_inc" @click="$emit('add', item)">+</button>
                <button class="item_count_dec" @click="$emit('remove', item, false)">-</button>
                <button class="item_remove" @click="$emit('remove', item, true)">Remove</button>
            </div>
        </div>
    </div>
    `
});
