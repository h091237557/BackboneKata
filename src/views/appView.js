
var app = app || {};

(function(){
	app.AppView = Backbone.View.extend({

	  el:$('.todoapp'),
 	  events:{
		"keypress .new-todo":"createOnEnter",
		"click .todo-clear a":"clearCompleted"
	  },

	  initialize:function(){
		_.bindAll(this.'addOne','addAll','render');
		
		this.input = this.$('#new-todo');
		app.todos.bind('add',this.addOne);
		app.todos.bind('refresh',this.addAll);

		app.todos.fetch();
	  },

	  addOne:function(todo){
		var view = new app.TodoView({model:todo});
		this.$('#todo-list').append(view.render().el);
	  },
	  createOnEnter:function(todo){
		console.log("create!!");
	  }
    })




})();
