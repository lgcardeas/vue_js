new Vue({
    el: "#vue-app",

    data: {
        name: null,
         age: null
    },

    methods: {
        logName: function(event){
            console.log("You have entered you name: " + event.target.value);
        },
        logAge: function(event){
            console.log("You have entered you age: " + event.target.value);
        }
    }
});