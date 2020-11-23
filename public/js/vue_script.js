'use strict';
var socket = io();
var vm = new Vue({
   el: '#totalID',
   data: {
          benders: benderlist,
          orders: {},
          mapLocation: {details: {x:0 , y:0}},
          a: 1
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
                               console.log(benderSelectedArray);
                               console.log(customerInfoArray);

                           },

     markDone: function() {
         checkFun(),
         this.addOrder(),
         console.log("BLA"),
         console.log("An order has been placed")
   },
 }
});
