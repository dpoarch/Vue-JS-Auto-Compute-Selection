// Define a custom filter called "currency". 
Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
});

var demo = new Vue({
    el: '#main',
    data: {
        // Define the model properties. The view will loop
        // through the services array and genreate a li
        // element for every one of its items.
        services: [
            {
                name: 'Tomato Sauce',
                price: 10,
                active:false
            },{
                name: 'Mozzarella Cheese',
                price: 15,
                active:false
            },{
                name: 'Mushrooms',
                price: 5,
                active:false
            },{
                name: 'Bacon',
                price: 10,
                active:false
            },
            {
                name: 'Shrimp',
                price: 20,
                active:false
            },{
                name: 'Olives',
                price: 5,
                active:false
            },{
                name: 'Green Pepper',
                price: 3,
                active:false
            }
        ]
    },
    methods: {
        toggleActive: function(s){
            s.active = !s.active;
        },
        total: function(){

            var total = 0;

            this.services.forEach(function(s){
                if (s.active){
                    total+= s.price;
                }
            });

           return total;
        }
    }
});