( function() {
	'use strict';

	describe( 'vui', function() {

		var container;

		beforeEach( function () {
			jasmine.addMatchers( vui.jasmine.dom.matchers );
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

		var createInput = function( type ) {
			var input = container.appendChild( document.createElement( 'input' ) );
			input.type = type;
			input.className = 'vui-input';
			return input;
		};

		var getComputedValue = function( element, property ) {
			return window.getComputedStyle( element ).getPropertyValue( property );
		};

		describe( 'input', function() {

			var textInput, emailInput, passwordInput, urlInput;

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
				var expected = { default: { default: '38px', Windows: '36px' } };
				expect( getComputedValue( textInput, 'height' ) ).toBeOnAgent( expected );
				expect( getComputedValue( emailInput, 'height' ) ).toBeOnAgent( expected );
				expect( getComputedValue( passwordInput, 'height' ) ).toBeOnAgent( expected );
				expect( getComputedValue( urlInput, 'height' ) ).toBeOnAgent( expected );
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

				it( 'has #f7f7f7 backgroundColor', function() {
					expect( textInput ).toHaveBackgroundColor( 'rgb(247, 247, 247)' );
					expect( emailInput ).toHaveBackgroundColor( 'rgb(247, 247, 247)' );
					expect( passwordInput ).toHaveBackgroundColor( 'rgb(247, 247, 247)' );
					expect( urlInput ).toHaveBackgroundColor( 'rgb(247, 247, 247)' );
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

		describe( 'input text', function() {

			it( 'defines selectors', function() {
				expect( document ).toHaveCssSelector( '.vui-input[type="text"]' );
				expect( document ).toHaveCssSelector( '.vui-input[type="text"]:focus' );
				expect( document ).toHaveCssSelector( '.vui-input[type="text"]:disabled' );
			} );

		} );

		describe( 'input email', function() {

			it( 'defines selectors', function() {
				expect( document ).toHaveCssSelector( '.vui-input[type="email"]' );
				expect( document ).toHaveCssSelector( '.vui-input[type="email"]:focus' );
				expect( document ).toHaveCssSelector( '.vui-input[type="email"]:disabled' );
			} );

		} );

		describe( 'input password', function() {

			it( 'defines selectors', function() {
				expect( document ).toHaveCssSelector( '.vui-input[type="password"]' );
				expect( document ).toHaveCssSelector( '.vui-input[type="password"]:focus' );
				expect( document ).toHaveCssSelector( '.vui-input[type="password"]:disabled' );
			} );

		} );

		describe( 'input url', function() {

			it( 'defines selectors', function() {
				expect( document ).toHaveCssSelector( '.vui-input[type="url"]' );
				expect( document ).toHaveCssSelector( '.vui-input[type="url"]:focus' );
				expect( document ).toHaveCssSelector( '.vui-input[type="url"]:disabled' );
			} );

		} );

		describe( 'input checkbox', function() {

			var input;

			beforeEach( function () {
				input = createInput( 'checkbox' );
			} );

			it( 'defines selectors', function() {
				expect( document ).toHaveCssSelector( '.vui-input[type="checkbox"]' );
				expect( document ).toHaveCssSelector( '.vui-input[type="checkbox"]:focus' );
			} );

			it( 'has transparent background color', function() {
				expect( input ).toHaveBackgroundColor( 'rgba(0, 0, 0, 0)' );
			} );

			it( 'has no border', function() {
				expect( input ).toHaveBorderStyle( 'none' );
			} );

			it( 'has 0 padding', function() {
				expect( input ).toHavePadding( '0px' );
			} );

			it( 'has default width', function() {
				expect( input ).toHaveWidth( '13px' );
			} );

			it( 'has default min height', function() {
				expect( input ).toHaveMinHeight( '13px' );
			} );

			it( 'has no box shadow', function() {
				expect( input ).toHaveBoxShadow( 'none' );
			} );

		} );

		describe( 'input radio', function() {

			var input;

			beforeEach( function () {
				input = createInput( 'checkbox' );
			} );

			it( 'defines selectors', function() {
				expect( document ).toHaveCssSelector( '.vui-input[type="radio"]' );
				expect( document ).toHaveCssSelector( '.vui-input[type="radio"]:focus' );
			} );

			it( 'has transparent background color', function() {
				expect( input ).toHaveBackgroundColor( 'rgba(0, 0, 0, 0)' );
			} );

			it( 'has no border', function() {
				expect( input ).toHaveBorderStyle( 'none' );
			} );

			it( 'has 0 padding', function() {
				expect( input ).toHavePadding( '0px' );
			} );

			it( 'has default width', function() {
				expect( input ).toHaveWidth( '13px' );
			} );

			it( 'has default min-height', function() {
				expect( input ).toHaveMinHeight( '13px' );
			} );

			it( 'has no box shadow', function() {
				expect( input ).toHaveBoxShadow( 'none' );
			} );

		} );

	} );

} )();
