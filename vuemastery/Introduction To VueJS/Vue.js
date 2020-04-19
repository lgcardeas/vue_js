
var eventBus = new Vue();

Vue.component("product", {
    props: {
        premiun: {
            type: Boolean,
            required: true
        },
        shipping: {
            trype: Function
        }
    },
    template: `
                <div class="product">
                <div class="product-image">
                    <img v-bind:src="image">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inventory > 10">In Stock</p>
                    <p v-else-if="inventory <= 10 && inventory > 0">Almost Gone</p>
                    <p v-else>Out Stock</p>
                    <p>User is premiun</p>
                    <p>Sipping: {{ shipping }}</p>
                    
                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>

                    <div v-for="(variant, index) in variants" 
                        v-bind:key="variant.variantId" 
                        class="color-box" 
                        v-bind:style="{background: variant.variantColor}"
                        v-on:mouseover="updateProduct(index)">
                    </div>

                    <button v-on:click="addToCart" 
                            v-bind:disabled="!inStock"
                            v-bind:class="{ disabledButton: !inStock}">
                        Add to Cart
                    </button>

                </div>

                <product-tabs v-bind:reviews="reviews"></product-tabs>
            </div>
    `,
    data: function () {
        return {
            brand: "VueJS",
            product: "Socks",
            selectedVariant: 0,
            inventory: 2,
            reviews: [],
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: "./vmSocks-green-onWhite.jpg"
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: "./vmSocks-blue-onWhite.jpg"
                }
            ],
            cart: 0
        }
    },
    methods: {
        updateProduct: function(index){
            this.selectedVariant = index;
        },
        addToCart: function(){
            eventBus.$emit('event-add-to-cart', this.variants[this.selectedVariant].variantId);
        }
    },
    computed: {
        title: function(){
            return this.brand + " " + this.product;
        },
        inStock: function(){
            if (this.inventory > 0){
                return true;
            } else {
                return false;
            }
        },
        image: function(){
            return this.variants[this.selectedVariant].variantImage;
        }
    },
    mounted() {
        eventBus.$on('event-add-review',  productReview => {
            console.log(productReview);
            console.log(this);
            this.reviews.push(productReview);
        })
    }
});

Vue.component("product-review", {
    template: `
        <form class="review-form" v-on:submit.prevent="onSubmit">
            <p v-if="isError">There is an error</[]>
            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name"/>
            </p>
            <p>
                <label for="review">Review:</label>
                <textarea id="review" v-model="review"></textarea>    
            </p>
            <p>
                <label for="rating"> Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option v-for="voute in [1,2,3,4,5]">{{ voute }}</option>
                </select>
            </p>
            <p>
                <input type="submit" value="Submit" />
            </p>
        </form>
    `,
    data: function(){
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        onSubmit: function(){
            if (this.name && this.review && this.rating){
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                };
                eventBus.$emit("event-add-review", productReview);
                this.name = null;
                this.review = null;
                this.rating =null;
                this.errors = [];
            } else {
                if (!this.name) this.errors.push("the name is required");
                if (!this.rating) this.errors.push("the rating is required");
                if (!this.review) this.errors.push("the review is required");
            }
        }
    },
    computed: {
        isError: function(){
            if (this.errors.length){
                return true;
            } else {
                return false;
            }
        }
    }
});

Vue.component("cart", {
    props: ['cart'],
    template: `
        <div class="cart">
            <p>Cart {{ cart.length }}</p>
        </div>
    `,    
});

Vue.component("product-tabs", {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: `
        <div>
            <span class="tab"
                  v-for="(tab, index) in tabs" 
                  v-bind:class="{activeTab: selectedTab === tab}"
                  v-bind:key="index"
                  v-on:click="selectedTab = tab">
                {{ tab }}
            </span>

            <div v-show="selectedTab === 'Reviews'">
                    <h2>Reviews</h2>
                    <p v-if="!reviews.length">There are no reviews yet.</p>
                    <ul v-else>
                        <li v-for="review in reviews">
                            Name: {{ review.name }} 
                            Rating: {{ review.rating }} 
                            Review: {{ review.review }} 
                        </li>
                    </ul>
                </div>

                <product-review v-show="selectedTab === 'Make a Review'">
                </product-review>
        </div>
    `,
    data: function(){
        return {
            tabs: ["Reviews", "Make a Review"],
            selectedTab: "Reviews"
        }
    }
})

var app = new Vue({
    el: "#app",
    data: {
        premiun: true,
        cart: []
    },
    computed: {
        shipping: function(){
            if (this.premiun){
                return "Free";
            } else {
                return 2.99;
            }
        }
    },
    methods: {
        addToCart: function(id){
            this.cart.push(id);
            this.inventory--;
        },
    }
});