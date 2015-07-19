module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		handlebars: {
			options: {
				namespace: 'JST',
				
				// Remove path and extension from template name
				processName: function(filePath) {
					return filePath.replace(/^(.*[\\\/])/, '').replace(/\.hbs$/, '');
				}	
			},
			
			ticketapp: {
				files: {
					'./src/assets/js/app/templates/compiled.js': './src/assets/js/app/templates/*.hbs'
				}
			}
		},
		
		concat: {
			options: {
				sourceMap: true,
				separator: ';'
			},

			app: {
				src: [
					'./src/assets/js/app/templates/compiled.js',
					'./src/assets/js/app/handlebarshelpers.js',
					'./src/assets/js/app/models/*.js',
					'./src/assets/js/app/collections/*.js',
					'./src/assets/js/app/views/*.js',
					'./src/assets/js/app/app.js'
				],

				dest: './public/js/app.js'
			}
		},
		
        uglify: {
			options: {
				banner: '/* <%= pkg.name %>, built <%=  grunt.template.today() %> */\n',
				compress: true,
				mangle: true,
				sourceMap: true
			},
			
			lib: {
				src: [
					'./src/assets/js/lib/jquery-1.11.3.js',
					'./src/assets/js/lib/underscore-min.js',
					'./src/assets/js/lib/backbone-min.js',
					'./src/assets/js/lib/handlebars.runtime-v3.0.3.js'
				],

				dest: './public/js/lib.min.js'
			},
			
			app: {
				files: {
					'./public/js/app.min.js': ['<%= concat.app.dest %>']
				}	
			}
		},
		
		watch: {			
			js: {
				files: [
					'./src/assets/js/app/**/*.js', 
					'./src/assets/js/app/**/**/*.js', 
					'./src/assets/js/app/**/**/**/*.js', 
					'./src/assets/js/app/**/js/templates/*.hbs'
				],
				
				tasks: ['handlebars', 'concat', 'uglify']
			}
		}
	});

	// Load the plugins that prvide the various Grunt tasks
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['handlebars', 'concat', 'uglify']);
}
