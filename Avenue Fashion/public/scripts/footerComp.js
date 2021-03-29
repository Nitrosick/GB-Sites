Vue.component('footer_comp', {
    data() {
        return {

        };
    },

    template: `
    <footer>
        <div class="top_footer">
            <div class="top_footer_links">
                <article class="footer_links_block">
                    <h3>Information</h3>
                    <a href="#" class="footer_link">The brand</a>
                    <a href="#" class="footer_link">Local stores</a>
                    <a href="#" class="footer_link">Customer service</a>
                    <a href="#" class="footer_link">Privacy & cookies</a>
                    <a href="#" class="footer_link">Site map</a>
                </article>
                <article class="footer_links_block">
                    <h3>Why buy from us</h3>
                    <a href="#" class="footer_link">Shipping & returns</a>
                    <a href="#" class="footer_link">Secure shopping</a>
                    <a href="#" class="footer_link">Testimonials</a>
                    <a href="#" class="footer_link">Award winning</a>
                    <a href="#" class="footer_link">Ethical trading</a>
                </article>
                <article class="footer_links_block">
                    <h3>Your account</h3>
                    <a href="#" class="footer_link">Sign in</a>
                    <a href="#" class="footer_link">Register</a>
                    <a href="#" class="footer_link">View cart</a>
                    <a href="#" class="footer_link">View your lookbook</a>
                    <a href="#" class="footer_link">Track an order</a>
                    <a href="#" class="footer_link">Update information</a>
                </article>
                <article class="footer_links_block">
                    <h3>Lookbook</h3>
                    <a href="#" class="footer_link">Latest posts</a>
                    <a href="#" class="footer_link">Men’s lookbook</a>
                    <a href="#" class="footer_link">Women’s lookbook</a>
                    <a href="#" class="footer_link">Lookbooks RSS feed</a>
                    <a href="#" class="footer_link">View your lookbook</a>
                    <a href="#" class="footer_link">Delete your lookbook</a>
                </article>
                <article class="footer_links_block">
                    <h3>Contact details</h3>
                    <p href="#" class="footer_info">Head Office: Avenue Fashion,<br>180-182 Regent Street, London.</p>
                    <p href="#" class="footer_info">Telephone: 0123-456-789</p>
                    <a href="#" class="footer_link">Email: support@yourwebsite.com</a>
                </article>
            </div>

            <div class="top_footer_tiles">
                <div class="award_winner">
                    <h2>Award winner</h2>
                    <span>Fashion Awards 2021</span>
                </div>
                <div class="footer_social">
                    <a href="#" class="footer_social_link"> <i class="fab fa-facebook-f"></i> </a>
                    <a href="#" class="footer_social_link"> <i class="fab fa-twitter"></i> </a>
                    <a href="#" class="footer_social_link"> <i class="fab fa-instagram"></i> </a>
                    <a href="#" class="footer_social_link"> <i class="fab fa-pinterest"></i> </a>
                </div>
            </div>
        </div>

        <div class="bottom_footer">
            <div class="bottom_footer_content">
                <span>©2021 Avenue Fashion™</span>
                <div class="placeholder"></div>
                <a href="#">Design by RobbyDesigns.com</a>
                <a href="#">Dev by Loremipsum.com</a>
            </div>
        </div>
    </footer>
    `
});
