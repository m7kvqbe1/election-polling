module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				
				files: {
					'./public/css/styles.css': './src/assets/sass/styles.scss'
				}	
			},
		},
		
		handlebars: {
			options: {
				namespace: 'JST',
				
				// Remove path and extension from template name
				processName: function(filePath) {
					return filePath.replace(/^(.*[\\\/])/, '').replace(/\.hbs$/, '');
				}	
			},
			
			app: {
				files: {
					'./src/assets/spa/templates/compiled.js': './src/assets/spa/templates/*.hbs'
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
					'./src/assets/spa/templates/compiled.js',
					'./src/assets/spa/helpers/*.js',
					'./src/assets/spa/collections/*.js',
					'./src/assets/spa/models/*.js',
					'./src/assets/spa/views/*.js',
					'./src/assets/spa/app.js'
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
					'./src/assets/spa/lib/jquery-1.11.3.js',
					'./src/assets/spa/lib/underscore.js',
					'./src/assets/spa/lib/backbone.js',
					'./src/assets/spa/lib/handlebars.runtime-v3.0.3.js'
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
					'./src/assets/spa/**/*.js', 
					'./src/assets/spa/*.js', 
					'./src/assets/spa/templates/*.hbs'
				],
				
				tasks: ['handlebars', 'concat', 'uglify']
			}
		}
	});

	// Load the plugins that prvide the various Grunt tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'handlebars', 'concat', 'uglify']);
}
