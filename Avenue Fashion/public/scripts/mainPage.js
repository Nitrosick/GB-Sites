Vue.component('main_poster_comp', {
    template: `
    <div class="main_poster">
        <span class="main_poster_ave">AVE</span>
        <a class="main_poster_link" href="#">shop men’s collection</a>
    </div>
    `
});

Vue.component('catalog_poster_comp', {
    template: `
    <div class="catalog_poster">
        <div>
            <h1>Our </h1>
            <h2>Catalog</h2>
        </div>
        <span>Latest Posts - Mens & Womens</span>
    </div>
    `
});

Vue.component('popular_goods_comp', {
    data() {
        return {

        };
    },

    template: `
    <div class="popular_goods wrapper">
        <ul class="popular_goods_categories">
            <li class="link_active">Popular</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Special Offers</li>
            <li>Comming Soon</li>
        </ul>

        <div class="popular_goods_content">
            <div class="popular_goods_content_left">
                <div class="popular_item">
                    <img src="images/item_1.jpg" alt="item" width="420">
                    <div class="popular_item_price">
                        <span class="euro">£</span>
                        <span class="price_value">89.99</span>
                    </div>
                </div>
                <div class="popular_item">
                    <img src="images/item_2.jpg" alt="item" width="420">
                    <div class="popular_item_price">
                        <span class="euro">£</span>
                        <span class="price_value">47.50</span>
                    </div>
                </div>
                <div class="popular_item popular_item_big">
                    <img src="images/item_3.jpg" alt="item" height="700">
                    <div class="popular_item_price">
                        <span class="euro">£</span>
                        <span class="price_value">69.95</span>
                    </div>
                </div>
            </div>
            <div class="popular_goods_content_right">
                <div class="popular_item popular_item_big">
                    <img src="images/item_4.jpg" alt="item" height="700">
                    <div class="popular_item_price">
                        <span class="euro">£</span>
                        <span class="old_price">107</span>
                        <span class="euro">£</span>
                        <span class="price_value">89.99</span>
                    </div>
                </div>
                <div class="popular_item">
                    <img src="images/item_5.jpg" alt="item" width="420">
                    <div class="popular_item_price">
                        <span class="euro">£</span>
                        <span class="price_value">29.95</span>
                    </div>
                </div>
                <div class="popular_item">
                    <img src="images/item_6.jpg" alt="item" width="420">
                    <div class="popular_item_price">
                        <span class="euro">£</span>
                        <span class="price_value">34.79</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
});

Vue.component('lookbooks_comp', {
    template: `
    <div class="lookbooks">
        <article class="lookbooks_block lookbook_man">
            <h2>Men's</h2>
            <h3>Lookbook</h3>
            <p>Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui. Elementum metus facilisis ut phasellu.</p>
            <button class="view_now">View Now</button>
        </article>
        <article class="lookbooks_block lookbook_woman">
            <h2>Women's</h2>
            <h3>Lookbook</h3>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus.</p>
            <button class="view_now">View Now</button>
        </article>
        <article class="lookbooks_block lookbook_you">
            <h2>Your</h2>
            <h3>Lookbook</h3>
            <p>See an item you like and click the &#10084; button to add it to your lookbook where you can create your own perfect look. It’s like your own boutique!</p>
            <button class="view_now">View Now</button>
        </article>
    </div>
    `
});
