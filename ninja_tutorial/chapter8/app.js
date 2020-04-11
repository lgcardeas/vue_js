new Vue({
    el: "#vue-app",

    data: {
        age: 28,
        a: 0,
        b: 0
    },

    computed: {
        aAge: function(){
            return this.a + this.age;
        },
        bAge: function(){
            return this.b + this.age;
        },
    }
});