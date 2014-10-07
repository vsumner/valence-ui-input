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

		describe( 'input', function() { 

			var textInput, emailInput, passwordInput, urlInput;

			var createInput = function( type ) {
				var input = container.appendChild( document.createElement( 'input' ) );
				input.type = type;
				input.className = 'vui-input';
				return input;
			};

			beforeEach( function () {
				textInput = createInput( 'text' );
				emailInput = createInput( 'text' );
				passwordInput = createInput( 'password' );
				urlInput = createInput( 'url' );
			} );

			it( 'defines selectors', function() {
				expect( document ).toHaveCssSelector( '.vui-input' );
				expect( document ).toHaveCssSelector( '.vui-input:focus' );
				expect( document ).toHaveCssSelector( '.vui-input:disabled' );
				expect( document ).toHaveCssSelector( '.vui-input[type="text"]' );
				expect( document ).toHaveCssSelector( '.vui-input[type="text"]:focus' );
				expect( document ).toHaveCssSelector( '.vui-input[type="email"]:disabled' );
				expect( document ).toHaveCssSelector( '.vui-input[type="password"]' );
				expect( document ).toHaveCssSelector( '.vui-input[type="password"]:focus' );
				expect( document ).toHaveCssSelector( '.vui-input[type="password"]:disabled' );
				expect( document ).toHaveCssSelector( '.vui-input[type="url"]' );
				expect( document ).toHaveCssSelector( '.vui-input[type="url"]:focus' );
				expect( document ).toHaveCssSelector( '.vui-input[type="url"]:disabled' );
			} );

			it( 'has white background color', function() {
				expect( textInput ).toHaveBackgroundColor( 'rgb(255, 255, 255)' );
				expect( emailInput ).toHaveBackgroundColor( 'rgb(255, 255, 255)' );
				expect( passwordInput ).toHaveBackgroundColor( 'rgb(255, 255, 255)' );
				expect( urlInput ).toHaveBackgroundColor( 'rgb(255, 255, 255)' );
			} );

			it( 'has #cccccc border color', function() {
				expect( textInput ).toHaveBorderColor( 'rgb(204, 204, 204)' );
				expect( emailInput ).toHaveBorderColor( 'rgb(204, 204, 204)' );
				expect( passwordInput ).toHaveBorderColor( 'rgb(204, 204, 204)' );
				expect( urlInput ).toHaveBorderColor( 'rgb(204, 204, 204)' );
			} );

			it( 'has 3px border radius', function() {
				expect( textInput ).toHaveBorderRadius( '3px' );
				expect( emailInput ).toHaveBorderRadius( '3px' );
				expect( passwordInput ).toHaveBorderRadius( '3px' );
				expect( urlInput ).toHaveBorderRadius( '3px' );
			} );

			it( 'has 0px margins', function() {
				expect( textInput ).toHaveMargin( '0px' );
				expect( emailInput ).toHaveMargin( '0px' );
				expect( passwordInput ).toHaveMargin( '0px' );
				expect( urlInput ).toHaveMargin( '0px' );
			} );

			it( 'has 5px padding', function() {
				expect( textInput ).toHavePadding( '5px' );
				expect( emailInput ).toHavePadding( '5px' );
				expect( passwordInput ).toHavePadding( '5px' );
				expect( urlInput ).toHavePadding( '5px' );
			} );

			it( 'has 36px height', function() {
				expect( textInput ).toHaveHeight( '36px' );
				expect( emailInput ).toHaveHeight( '36px' );
				expect( passwordInput ).toHaveHeight( '36px' );
				expect( urlInput ).toHaveHeight( '36px' );
			} );

			it( 'has 100% width', function() {
				expect( textInput ).toHaveWidth( '1000px' );
				expect( emailInput ).toHaveWidth( '1000px' );
				expect( passwordInput ).toHaveWidth( '1000px' );
				expect( urlInput ).toHaveWidth( '1000px' );
			} );

			it( 'has 25px line height', function() {
				expect( textInput ).toHaveLineHeight( 'normal' );
				expect( emailInput ).toHaveLineHeight( 'normal' );
				expect( passwordInput ).toHaveLineHeight( 'normal' );
				expect( urlInput ).toHaveLineHeight( 'normal' );
			} );

			it( 'has initial color', function() {
				expect( textInput ).toHaveColor( 'rgb(0, 0, 0)' );
				expect( emailInput ).toHaveColor( 'rgb(0, 0, 0)' );
				expect( passwordInput ).toHaveColor( 'rgb(0, 0, 0)' );
				expect( urlInput ).toHaveColor( 'rgb(0, 0, 0)' );
			} );

			it( 'inherits font-family arial', function() {
				expect( textInput ).toHaveFontFamily( 'arial' );
				expect( emailInput ).toHaveFontFamily( 'arial' );
				expect( passwordInput ).toHaveFontFamily( 'arial' );
				expect( urlInput ).toHaveFontFamily( 'arial' );
			} );

			it( 'inherits font-size 20px', function() {
				expect( textInput ).toHaveFontSize( '20px' );
				expect( emailInput ).toHaveFontSize( '20px' );
				expect( passwordInput ).toHaveFontSize( '20px' );
				expect( urlInput ).toHaveFontSize( '20px' );
			} );

			describe( 'disabled', function() { 

				beforeEach( function () {
					textInput.disabled = true;
					emailInput.disabled = true;
					passwordInput.disabled = true;
					urlInput.disabled = true;
				} );

				it( 'has #666666 color', function() {
					expect( textInput ).toHaveColor( 'rgb(102, 102, 102)' );
					expect( emailInput ).toHaveColor( 'rgb(102, 102, 102)' );
					expect( passwordInput ).toHaveColor( 'rgb(102, 102, 102)' );
					expect( urlInput ).toHaveColor( 'rgb(102, 102, 102)' );
				} );

			} );

			describe( 'readonly', function() { 

				beforeEach( function () {
					textInput.readOnly = true;
					emailInput.readOnly = true;
					passwordInput.readOnly = true;
					urlInput.readOnly = true;
				} );

				it( 'has initial color', function() {
					expect( textInput ).toHaveColor( 'rgb(0, 0, 0)' );
					expect( emailInput ).toHaveColor( 'rgb(0, 0, 0)' );
					expect( passwordInput ).toHaveColor( 'rgb(0, 0, 0)' );
					expect( urlInput ).toHaveColor( 'rgb(0, 0, 0)' );
				} );

			} );

		} );

	} );

} )();