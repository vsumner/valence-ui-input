( function( vui ) {

	'use strict';

	// Check if the provided vui global is defined, otherwise try to require it if
	// we're in a CommonJS environment; otherwise we'll just fail out
	if( vui === undefined ) {
		if( typeof require === 'function' ) {
			vui = require('../../core');
		} else {
			throw new Error('load vui first');
		}
	}

	// Export the vui object if we're in a CommonJS environment.
	// It will already be on the window otherwise
	if( typeof module === 'object' && typeof module.exports === 'object' ) {
		module.exports = vui;
	}

	var $ = vui.$;

	$.widget( "vui.vui_autoresize", {

		options: {
			MaxHeight: 'none',
			MinHeight: '20px'
		},

		_create: function () {
			var self = this;

			var textarea = $(this.element),
				minHeight = textarea.attr('data-min-height') ||
					textarea.css('min-height') !== 'none' && textarea.css('min-height') ||
					this.options.MinHeight,
				maxHeight = textarea.attr('data-max-height') ||
					textarea.css('max-height') !== 'none' && textarea.css('max-height') ||
					this.options.MaxHeight;

			// normalize height values by setting and retrieving them on the element
			if (maxHeight !== 'none') {
				textarea[0].style.height = maxHeight;
				maxHeight = textarea.height();
			}

			textarea[0].style.height = minHeight;
			minHeight = textarea.height();

			// bind the adjust function with all values
			var populatedAdjust = !!Function.prototype.bind ?
				this._textAreaAdjust.bind(this, textarea, minHeight, maxHeight) :
				function () {
					self._textAreaAdjust(textarea, minHeight, maxHeight);
				};

			textarea.keyup(populatedAdjust);
			textarea.change(populatedAdjust);

			textarea.css('overflow-y', 'hidden');

			populatedAdjust();
		},

		_textAreaAdjust: function (textarea, minHeight, maxHeight) {
			var padding = textarea.innerHeight() - textarea.height();

			textarea
				.height(minHeight);

			var currentHeight = textarea[0].scrollHeight - padding;

			var setHeight = Math.max(minHeight, currentHeight);
			if (maxHeight !== 'none') {
				setHeight = setHeight > maxHeight ? maxHeight : setHeight;
			}

			textarea
				.height(setHeight)
				.css('overflow-y', setHeight === maxHeight ? 'auto' : 'hidden')
				.trigger('vui-autoresize-change');
		}

	} );

	vui.addClassInitializer(
		'vui-autoresize',
		function( node ) {
			$( node ).vui_autoresize();
		}
	);

} )( window.vui );
