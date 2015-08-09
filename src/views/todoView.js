
var app = app || {};

(function(){
	app.TodoView = Backbone.View.extend({
		tagName:"li",
		template:$("#item-template").template(),

		events:{
		  "change .check" : "toggleDone",
		  "dblclick .todo-content":"edit",
		  "click .todo-destroy":"destroy",
		  "keypress .todo-input":"updateOnEnter",
		  "blur .todo-input":"close"
 	    },

		initialize:function(){
		  //確保函式裡的執行環境是正確的
		  _.bindAll(this,'render','close','remove');
		
		  this.model.bind('change',this.render);
		  this.model.bind('destroy',this.remove);	
		},

		render:function(){
		  var element = jQuery.tmpl($("#item-template").template(),this.model.toJSON());
		  $(this.el).html(element);
		  this.$input = this.$('.edit').find('input');
		  return this;
		},

		toggleDone:function(){		  
		  this.model.toggle();
		},
		
		edit:function(){
		  $(this.el).addClass("editing");
		  this.$input.focus();
		},
		close:function(e){
		  this.model.save({content:this.$input.val()});
		  $(this.el).removeClass("editing");
	    },
		remove:function(){
		  $(this.el).remove();
	    },
		destroy:function(){
		  this.model.destroy();	
		},
		updateOnEnter:function(e){
		  if(e.keyCode == 13){
			e.target.blur();
		  }
		}


	});

})();
