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

		var createOption = function( text ) {
			var option = document.createElement( 'option' );
			option.text = text;
			return option;
		};

		var getComputedValue = function( element, property ) {
			return window.getComputedStyle( element ).getPropertyValue( property );
		};

		describe( 'select single', function() {

			var select, option1;

			beforeEach( function () {
				select = container.appendChild( document.createElement( 'select' ) );
				select.className = 'vui-input';

				option1 = createOption( 'option 1' );
				select.appendChild( option1 );
				select.appendChild( createOption( 'option 2' ) );
				select.appendChild( createOption( 'option 3' ) );
			} );

			it( 'defines selectors', function() {
				expect( document ).toHaveCssSelector( 'select.vui-input' );
				expect( document ).toHaveCssSelector( 'select.vui-input option' );
			} );

			it( 'has white background color', function() {
				expect( select ).toHaveBackgroundColor( 'rgb(255, 255, 255)' );
			} );

			it( 'has #cccccc border color', function() {
				expect( select ).toHaveBorderColor( 'rgb(204, 204, 204)' );
			} );

			it( 'has 3px border radius', function() {
				expect( select ).toHaveBorderRadius( '3px' );
			} );

			it( 'has 0px margins', function() {
				expect( select ).toHaveMargin( '0px' );
			} );

			it( 'has 4px 30px 4px 5px padding', function() {
				expect( select ).toHaveTopPadding( '4px' );
				expect( select ).toHaveRightPadding( '30px' );
				expect( select ).toHaveBottomPadding( '4px' );
				expect( select ).toHaveLeftPadding( '5px' );
			} );

			it( 'has 34px height', function() {
				var expected = { default: { default: '36px', Windows: '34px' } };
				expect( getComputedValue( select, 'height' ) ).toBeOnAgent( expected );
			} );

			it( 'has 100% width', function() {
				expect( select ).toHaveWidth( '1000px' );
			} );

			it( 'has initial color', function() {
				expect( select ).toHaveColor( 'rgb(0, 0, 0)' );
			} );

			it( 'inherits font-family arial', function() {
				expect( select ).toHaveFontFamily( 'arial' );
			} );

			it( 'inherits font-size 20px', function() {
				expect( select ).toHaveFontSize( '20px' );
			} );

			it( 'has background positioned right and center', function() {
				expect( select ).toHaveBackgroundPosition( '100% 50%' );
			} );

			it( 'has base-64 encoded background image', function() {
				expect( select ).toHaveBase64BackgroundImage();
			} );

			it( 'has background no-repeat', function() {
				expect( select ).toHaveBackgroundRepeat( 'no-repeat' );
			} );

			describe( 'option', function() {

				it( 'has black color', function() {
					expect( option1 ).toHaveColor( 'rgb(0, 0, 0)' );
				} );

				it( 'has normal font-weight', function() {
					expect( option1 ).toHaveFontWeight( 'normal' );
				} );

				it( 'has normal font-style', function() {
					expect( option1 ).toHaveFontStyle( 'normal' );
				} );

			} );

			describe( 'disabled', function() {

				beforeEach( function () {
					select.disabled = true;
				} );

				it( 'has #666666 color', function() {
					expect( select ).toHaveColor( 'rgb(102, 102, 102)' );
				} );

				it( 'has #f7f7f7 backgroundColor', function() {
					expect( select ).toHaveBackgroundColor( 'rgb(247, 247, 247)' );
				} );

			} );

			describe( 'readonly', function() {

				beforeEach( function () {
					select.readOnly = true;
				} );

				it( 'has initial color', function() {
					expect( select ).toHaveColor( 'rgb(0, 0, 0)' );
				} );

			} );

			describe( 'rtl', function() {

				beforeEach( function () {
					container.setAttribute( 'dir', 'rtl' );
				} );

				it( 'has 30px left padding', function() {
					expect( select ).toHaveLeftPadding( '30px' );
				} );

				it( 'has 5px right padding', function() {
					expect( select ).toHaveRightPadding( '5px' );
				} );

				it( 'has background positioned left and center', function() {
					expect( select ).toHaveBackgroundPosition( '0% 50%' );
				} );

			} );

		} );

		describe( 'select groups', function() {

			var select, group1, group2;

			beforeEach( function () {

				select = container.appendChild( document.createElement( 'select' ) );
				select.className = 'vui-input';

				group1 = select.appendChild( document.createElement( 'optgroup' ) );
				group1.setAttribute( 'label', 'group 1' );
				group2 = select.appendChild( document.createElement( 'optgroup' ) );
				group2.setAttribute( 'label', 'group 2' );

				group1.appendChild( createOption( 'option 1' ) );
				group1.appendChild( createOption( 'option 2' ) );
				group2.appendChild( createOption( 'option 1' ) );
				group2.appendChild( createOption( 'option 2' ) );

			} );

			it( 'defines selectors', function() {
				expect( document ).toHaveCssSelector( 'select.vui-input optgroup' );
			} );

			it( 'has #666666 color', function() {
				expect( group1 ).toHaveColor( 'rgb(102, 102, 102)' );
			} );

			it( 'has bold font-weight', function() {
				expect( group1 ).toHaveFontWeight( 'bold' );
			} );

			it( 'has normal font-style', function() {
				expect( group1 ).toHaveFontStyle( 'normal' );
			} );

		} );

		describe( 'select multiple', function() {

			var select;

			beforeEach( function () {

				select = container.appendChild( document.createElement( 'select' ) );
				select.setAttribute( 'multiple', 'true' );
				select.className = 'vui-input';

				select.appendChild( createOption( 'option 1' ) );
				select.appendChild( createOption( 'option 2' ) );
				select.appendChild( createOption( 'option 3' ) );

			} );

			it( 'defines selectors', function() {
				expect( document ).toHaveCssSelector( 'select.vui-input:not([multiple])' );
				expect( document ).toHaveCssSelector( '[dir="rtl"] select.vui-input:not([multiple])' );
				expect( document ).toHaveCssSelector( 'select.vui-input:not([multiple]):focus' );
				expect( document ).toHaveCssSelector( 'select.vui-input:not([multiple]):hover' );
				expect( document ).toHaveCssSelector( '[dir="rtl"] select.vui-input:not([multiple]):focus' );
				expect( document ).toHaveCssSelector( '[dir="rtl"] select.vui-input:not([multiple]):hover' );
			} );

			it( 'does not have base-64 encoded background image', function() {
				expect( select ).not.toHaveBase64BackgroundImage();
			} );

			describe( 'rtl', function() {

				beforeEach( function () {
					container.setAttribute( 'dir', 'rtl' );
				} );

				it( 'does not have base-64 encoded background image', function() {
					expect( select ).not.toHaveBase64BackgroundImage();
				} );

			} );

		} );

	} );

} )();
