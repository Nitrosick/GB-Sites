Vue.component('header_comp', {
    data() {
        return {
            namePage: window.location.href.split('/').reverse()[0],
        };
    },

    template: `
    <header>
        <div class="top_header">
            <div class="top_header_content">
                <select name="currency_gbp" id="currency_gbp">
                    <option value="Currency: GBP">Currency: GBP</option>
                </select>
                <div class="placeholder"></div>
                <a href="#">Register</a>
                <a href="#">Sign in</a>
                <cart_comp ref="cart_comp"></cart_comp>
            </div>
        </div>
        <div class="bottom_header wrapper">
            <a href="index.html" class="bottom_header_logo">
                <span class="bottom_header_logo_bold">Avenue</span>
                <span>Fashion</span>
            </a>
            <div class="placeholder"></div>
            <a class="bottom_header_link link_with_drop" :class="{ link_active: namePage == 'catalog.html' }" href="catalog.html">Mens</a>
            <a class="bottom_header_link link_with_drop" :class="{ link_active: namePage == 'catalog.html' }" href="catalog.html">Womens</a>
            <a class="bottom_header_link" :class="{ link_active: namePage == 'index.html' }" href="index.html">The Brand</a>
            <a class="bottom_header_link" href="#">Local Stores</a>
            <a class="bottom_header_link link_with_drop" href="#">Look Book</a>
            <div class="bottom_header_search">
                <input type="text" id="search" placeholder="Search...">
                <img class="search_icon" src="images/search_icon.png" alt="icon">
            </div>
        </div>
    </header>
    `
});
