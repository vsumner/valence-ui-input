( function() {
	'use strict';

	describe( 'vui', function() {

		var node;

		beforeEach( function () {
			jasmine.addMatchers( d2l.jasmine.matchers );
			//node = document.body.appendChild( document.createElement( 'div' ) );
			//node.className = 'vui-input';
		} );

		afterEach( function() {
			//document.body.removeChild( node );
		} );

		describe( 'input', function() { 

			it( 'placeholder test', function() {
				expect( true ).toBeTruthy();
			} );

		} );

	} );

} )();