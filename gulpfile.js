var gulp = require( 'gulp' ),
	del = require( 'del' ),
	vui = require( 'vui-helpers' ),
	imagesToLess = require( 'images-to-less-variables' );

gulp.task( 'clean', function( cb ) {
	del([ 'input.css' ], cb);
} );

gulp.task( 'iconsLess', function ( done ) {
	imagesToLess( '*.png', {
		dest: 'input-icons.less',
		prefix: 'vui-'
	} ).then( function() {
		done();
	} );
} );

gulp.task( 'css', [ 'iconsLess' ], function () {
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
