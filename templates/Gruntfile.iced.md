
Gruntfile
=========

This Node script is executed when you run `grunt` or `sails lift`. It's purpose is to load the
Grunt tasks in your project's `tasks` folder, and allow you to add and remove tasks as you see fit.
For more information on how this works, check out the `README.md` file that was generated in
your `tasks` folder.

WARNING:
Unless you know what you're doing, you shouldn't change this file. Check out the `tasks` directory
instead.


    module.exports = (grunt) ->


      # Load the include-all library in order to require all of our grunt
      # configurations and task registrations dynamically.
    	includeAll = undefined
      try
        includeAll = require 'include-all'
      catch e0
        try
          includeAll = require 'sails/node_modules/include-all'
        catch e1
          console.error 'Could not find `include-all` module.'
          console.error 'Skipping grunt tasks...'
          console.error 'To fix this, please run:')
          console.error 'npm install include-all --save`')
          console.error ''

      grunt.registerTask 'default', []
      return

We need a function which loads Grunt configuration modules from a specified relative path. These
modules should export a function that, when run, should either load/configure or register a Grunt task.

    	loadTasks = (relPath) ->
    		includeAll({
    			dirname: require('path').resolve(__dirname, relPath),
    			filter: /(.+)\.iced\.md$/
    		}) or {}

    	taskConfigurations = loadTasks './tasks/config'
  		registerDefinitions = loadTasks './tasks/register'

  		registerDefinitions.default ?= (grunt) ->
        grunt.registerTask('default', [])
        return

      task(grunt) for own name,task of taskConfigurations
    	task(grunt) for own name,task of registerDefinitions
      return
