new Vue({
    el: "#vue-app",

    data: {
        output: 'You fac food'
    },
    methods: {
        readRefs: function(){
            this.output = this.$refs.inpput_read.value;
        }
    },
    computed: {
        
    }
});