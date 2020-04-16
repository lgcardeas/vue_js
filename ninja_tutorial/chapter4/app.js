new Vue({
    el: "#vue-app",

    data: {
        name: "Luis",
         age: "28",
         linkedin: "https://www.linkedin.com/in/lgcardenas910526/"
    },

    methods: {
        greet: function(){
            return "Meet " + this.name;
        },
        setName: function(name){
            this.name = name;
        },
        setAge: function(age){
            this.age = age;
        }
    }
});