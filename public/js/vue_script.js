'use strict';
var socket = io();

var vm = new Vue({
   el: '#totalID',
   data: {
          benders: benderlist,
          orders: {},
          mapLocation: {details: {x:0 , y:0}},
          a: 0,
          orderPlaced: false,
          items: [],
          info: []
   },
  /* created: function () {
     socket.on('initialize', function (data) {
       this.orders = data.orders;
     }.bind(this));

     socket.on('currentQueue', function (data) {
       this.orders = data.orders;
     }.bind(this));
   },*/


     methods: {

     displayOrder: function (event) { this.mapLocation = {details: { x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
                                                 y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top}}

       },

     getNext: function () {
       this.a++;
       return this.a;

    /*   var lastOrder = Object.keys(this.orders).reduce( function (last, next) {
         return Math.max(last, next);
       }, 0);
       return lastOrder + 1;*/
     },


     addOrder: function (event) {
       socket.emit("addOrder", { orderId: this.getNext(),
                                 details: { x: this.mapLocation.details.x,
                                            y: this.mapLocation.details.y},
                                 orderItems: [benderSelectedArray],
                                 customerInfo: [customerInfoArray]

                               });


                           },

    orderConfirmation: function(){


    },

     markDone: function() {
         checkFun(),
         this.addOrder(),
         this.info = benderSelectedArray
         this.items = customerInfoArray
         console.log(benderSelectedArray);
         console.log(customerInfoArray);
         this.orderPlaced = true,
         console.log("An order has been placed")
   },
 }
});
