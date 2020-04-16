new Vue({
    el: "#vue-app",

    data: {
        available: false,
        nearby: false
    },
    methods: {
        switchAvailable: function(){
            this.available = !this.available;
        },
        switchNearby: function(){
            this.nearby = !this.nearby;
        },
    },
    computed: {
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});