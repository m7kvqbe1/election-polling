module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				
				files: {
					'./public/css/styles.css': './application/assets/sass/styles.scss'
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
					'./application/assets/spa/templates/compiled.js': './application/assets/spa/templates/*.hbs'
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
					'./application/assets/spa/templates/compiled.js',
					'./application/assets/spa/helpers/*.js',
					'./application/assets/spa/collections/*.js',
					'./application/assets/spa/models/*.js',
					'./application/assets/spa/views/*.js',
					'./application/assets/spa/app.js'
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
					'./node_modules/jquery/dist/jquery.js',
					'./node_modules/underscore/underscore.js',
					'./node_modules/backbone/backbone.js',
					'./node_modules/handlebars/dist/handlebars.runtime.js'
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
			sass: {
				files: ['./application/assets/sass/*.scss'],
				tasks: ['sass']
			},	
			
			js: {
				files: [
					'./application/assets/spa/**/*.js', 
					'./application/assets/spa/*.js', 
					'./application/assets/spa/templates/*.hbs'
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
