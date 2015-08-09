
var app = app || {};

(function(){
	'use strict';

	var Todos = Backbone.Collection.extend({
		model:app.Todo,
		
		localStorage: new Backbone.LocalStorage('todos-backbone'),
		
		//只選出發有已完成的待辦事項
		done:function(){
			return this.filter(function(todo){return todo.get('done');});
		},
		
		
		remaining:function(){
			return this.without.apply(this,this.done());
		}
	});

	app.Todos = new Todos();

})();
