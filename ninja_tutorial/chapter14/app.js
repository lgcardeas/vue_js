var one = new Vue({
    el: "#vue-app-one",

    data: {
        title: "Vue App 1"
    },
    methods: {
    
    },
    computed: {
        greet: function(){
            return "Hello from vue instance 1";
        }
    }
});

var two = new Vue({
    el: "#vue-app-two",

    data: {
        title: "Vue App 2"
    },
    methods: {
        changeTitle: function(){
            one.title = "Changing the title of App 1";
        }
    },
    computed: {
        greet: function(){
            return "Hello from vue instance 2";
        }
    }
});