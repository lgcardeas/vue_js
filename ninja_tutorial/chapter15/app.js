Vue.component('greeting',{
    template: "<p> Hey there, I am a {{ name }} . <button v-on:click=\"changeName\">changeName</button></p>",
    data: function(){
        return {
            name: "Yoshi"
        };
    },
    methods: {
        changeName: function(){
            this.name = "Mario";
        }
    }
});

new Vue({
    el: "#vue-app-one",

    data: {

    },
    methods: {
    
    },
    computed: {
        
    }
});


new Vue({
    el: "#vue-app-two",

    data: {

    },
    methods: {
    
    },
    computed: {

    }
});
