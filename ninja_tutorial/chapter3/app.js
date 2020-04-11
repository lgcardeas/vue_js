new Vue({
    el: "#vue-app",

    data: {
        name: "Luis",
         age: "28"
    },

    methods: {
        greet: function(){
            return "Good Morning";
        },
        setName: function(name){
            this.name = name;
        },
        setAge: function(age){
            this.age = age;
        }
    }
});