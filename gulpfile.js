var gulp = require( 'gulp' ),
	del = require( 'del' ),
	vui = require( 'vui-helpers' );

gulp.task( 'clean', function( cb ) {
	del([ 'input.css' ], cb);
} );

gulp.task( 'css', function () {
	return vui.makeCss( 'input.css.less', 'input.css', { lintOpts: '.csslintrc' } );
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css' );
} );

gulp.task( 'test', function () {
	return vui.test( {
		files: [
			'test/unit/**/*Spec.js',
			'input.css'
		]
	} ) ;
} );
