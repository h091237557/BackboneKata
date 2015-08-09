
var app = app || {};

(function(){
	app.AppView = Backbone.View.extend({

	  el:$('.todoapp'),
 	  events:{
		"keypress .new-todo":"createOnEnter",
		"click .todo-clear a":"clearCompleted"
	  },

	  initialize:function(){
		_.bindAll(this,'addOne','addAll','render');
		
		this.input = this.$('.new-todo');
		app.Todos.bind('add',this.addOne);
		app.Todos.bind('reset',this.addAll);

		app.Todos.fetch();
	  },

	  addOne:function(todo){
		var view = new app.TodoView({model:todo});
		this.$('.todo-list').append(view.render().el);
	  },
	  addAll:function(){
		app.Todos.each(this.addOne);
	  },
	  createOnEnter:function(e){
		if(e.keyCode != 13) return;
		
		var value = this.input.val();
		if(!value) return;
        
		app.Todos.create({content:value});
		this.input.val('');
	  },
	  clearCompleted:function(){
		_.each(app.Todos.done(),function(todo){
			todo.destroy();
		 })		
	  },
	  render:function(){
		console.log("render!");
	  }	  

    });
})();
