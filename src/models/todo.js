

 var app = app || {};

(function(){
	'use strict';
       app.Todo = Backbone.Model.extend({
           defaults:{
               done:false
           },
 
           toggle:function(){
               this.save({
                   done: !this.get('done')
               });
           }
  
       });
 

})();


