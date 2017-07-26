module.exports = function(grunt) {

  grunt.initConfig({

  	sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'style.css': 'style.sass'
            }
        }
    },

    imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,jpeg,gif}'],
            dest: 'images/min/'
        	}]
    	}
	},

	watch: {
    scripts: {
        files: ['**/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        	},
    	}
	}

  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'imagemin', 'watch']);
};