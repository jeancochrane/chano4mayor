module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            self: {
                files: 'Gruntfile.js'
            },
            
            scss: {
                files: 'src/scss/styles.scss',
                tasks: ['sass', 'postcss']
            },

            css: {
                files: 'styles.min.css',
                options: {
                    livereload: true
                }
            },

            uglify: {
                files: 'src/js/*.js',
                tasks: ['uglify']
            },

            js: {
                files: 'scripts.min.js',
                options: {
                    livereload: true
                }
            },

            livereload: {
                files: '**/*.{html,svg,png,jpg}',
                options: {
                    livereload: true
                }
            }
        },

        sass: {
            scss: {
                options: {
                    trace: true
                },
                src: 'src/scss/styles.scss',
                dest: 'src/scss/styles-unprefixed.css'
            }
        },

        postcss: {
            css: {
                options: {
                    map: true,
                    processors: [
                        require('autoprefixer')({warnForDuplicates: false}),
                        require('cssnano')()
                    ]
                },
                src: 'src/scss/styles-unprefixed.css',
                dest: 'styles.min.css'
            }
        },

        uglify: {
            options:{
                compress: {
                    drop_console: false
                }
            },
            js: {
                files: {
                    'scripts.min.js': 'src/js/*.js'
                }
            }
        },
    });
    grunt.registerTask('build', ['sass', 'postcss', 'uglify']);
    grunt.registerTask('default', ['build', 'watch']);
};
