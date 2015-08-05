#Backbone Kata

這是一個運用Backbone js做的To List 的Kata，並同時使用npm、bower管理套件。

* npm install
* bower install
* gulp clean and bower

 

##Step 1 NPM Install
npm install 安裝需要的套件，大部份是安裝gulp需要用的套件。

	
	"name": "backbone",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
 	 	"test": "echo \"Error: no test specified\" && exit 1"
 	},
	"repository": {
 		"type": "git",
 		"url": "git+https://github.com/h091237557/BackboneTest.git"
	},
	"author": "",
	"license": "ISC",
	"bugs": {
 	"url": "https://github.com/h091237557/BackboneTest/issues"
	},
	"homepage": "https://github.com/h091237557/BackboneTest#readme",
	"dependencies": {
		"gulp": "^3.9.0",
		"gulp-filter": "^2.0.2",
 		"gulp-util": "^3.0.6",
 		"main-bower-files": "^2.9.0",
 		"rimraf": "^2.4.1"
 	}


##Step 2 Bower Install
安裝前端需要用的套件，其中overrides的jquery-tmpl如果不設置的話，在gulp 裡的main-bower-files會無法從bower_components抓取出所需的檔案。


	"name": "backbone",
	"version": "0.0.0",
	"homepage": "https://github.com/h091237557/BackboneTest",
	"authors": [
 		"mark <h091237557@gmail.com>"
	],
	"license": "MIT",
	"ignore": [
 		"**/.*",
  		"node_modules",
   	   "bower_components",
      "test",
      "tests"
	],
	"dependencies": {
  		"jquery": "~2.1.4",
  		"underscore": "~1.8.3",
  		"backbone": "~1.2.1",
  		"backbone.localStorage": "~1.1.16",
  		"jquery-tmpl": "*",
  		"reset-css": "~2.0.2011012602"
	},
	"overrides":{
		"jquery-tmpl":{
		"main":[
		  "**/jquery.tmpl.js"
		]
		}
	}
	
##Step 3 Run Gulp
將bower_componets所需要到的移至dist/lib。

	var gulp = require('gulp');
	var gutil = require('gulp-util');
	var gulpFilter = require('gulp-filter');
	var rimraf = require('rimraf');
	var mainBowerFiles = require('main-bower-files');

	var js_dest_path = 'assets/lib/js';

	var jsFilter = gulpFilter('*.js');

	gulp.task('clean',function(){
		rimraf('./dist/lib',function(){});
	});

	gulp.task('bower',function(){
		var mainFiles = mainBowerFiles();
		gutil.log(mainFiles);
		return gulp.src(mainFiles,{base:'./bower_components'})
			.pipe(gulp.dest('./dist/lib'));
	});
	
##Step4 建立HTML與CSS

![MacDown Screenshot](https://github.com/h091237557/BackboneTest/blob/master/img/tolist.png)



