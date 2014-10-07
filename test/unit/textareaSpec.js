( function() {
	'use strict';

	describe( 'vui', function() {

		var container;

		beforeEach( function () {
			jasmine.addMatchers( d2l.jasmine.matchers );
			container = document.body.appendChild( document.createElement( 'div' ) );
			container.style.backgroundColor = 'green';
			container.style.fontFamily = 'arial';
			container.style.fontSize = '20px';
			container.style.width = '1000px';
			container.style.lineHeight = '30px';
		} );

		afterEach( function() {
			document.body.removeChild( container );
		} );

		describe( 'textarea', function() { 

			var textarea;

			beforeEach( function () {
				textarea = container.appendChild( document.createElement( 'textarea' ) );
				textarea.className = 'vui-input';
			} );

			it( 'defines selectors', function() {
				expect( document ).toHaveCssSelector( 'textarea.vui-input' );
			} );

			it( 'has white background color', function() {
				expect( textarea ).toHaveBackgroundColor( 'rgb(255, 255, 255)' );
			} );

			it( 'has #cccccc border color', function() {
				expect( textarea ).toHaveBorderColor( 'rgb(204, 204, 204)' );
			} );

			it( 'has 3px border radius', function() {
				expect( textarea ).toHaveBorderRadius( '3px' );
			} );

			it( 'has 0px margins', function() {
				expect( textarea ).toHaveMargin( '0px' );
			} );

			it( 'has 5px padding', function() {
				expect( textarea ).toHavePadding( '5px' );
			} );

			it( 'has 36px height', function() {
				expect( textarea ).toHaveHeight( '62px' );
			} );

			it( 'has 100% width', function() {
				expect( textarea ).toHaveWidth( '1000px' );
			} );

			it( 'has 25px line height', function() {
				expect( textarea ).toHaveLineHeight( '25px' );
			} );

			it( 'has initial color', function() {
				expect( textarea ).toHaveColor( 'rgb(0, 0, 0)' );
			} );

			it( 'inherits font-family arial', function() {
				expect( textarea ).toHaveFontFamily( 'arial' );
			} );

			it( 'inherits font-size 20px', function() {
				expect( textarea ).toHaveFontSize( '20px' );
			} );

			it( 'has auto overflow', function() {
				expect( textarea ).toHaveOverflow( 'auto' );
			} );

			describe( 'disabled', function() { 

				beforeEach( function () {
					textarea.disabled = true;
				} );

				it( 'has #666666 color', function() {
					expect( textarea ).toHaveColor( 'rgb(102, 102, 102)' );
				} );

			} );

			describe( 'readonly', function() { 

				beforeEach( function () {
					textarea.readOnly = true;
				} );

				it( 'has initial color', function() {
					expect( textarea ).toHaveColor( 'rgb(0, 0, 0)' );
				} );

			} );

		} );

	} );

} )();