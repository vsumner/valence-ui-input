( function( $ ) {

	$.widget( "vui.vui_longEdit", {

		options: {
			MaxHeight: 0,
            MinHeight: 20
		},

		_create: function() {
			var $longEdit = $( this.element );

			this.options.MaxHeight = $longEdit.attr( 'data-longedit-maxheight' ) !== undefined ? $longEdit.attr( 'data-longedit-maxheight' ) : this.options.MaxHeight;

			var that = this;
			$longEdit.keydown( function( e ) {
				that._textAreaAdjust( $longEdit, that.options.MaxHeight, that.options.MinHeight );
			} );

			$longEdit.change( function( e ) {
				that._textAreaAdjust( $longEdit, that.options.MaxHeight, that.options.MinHeight );
			} );
		},

		_textAreaAdjust: function( $longEdit, inMaxHeight, inMinHeight ) {

			$longEdit[0].style.height = '0px';
			$longEdit[0].style.padding = '0px';
			var h = $longEdit[0].scrollHeight;

			if( h < inMinHeight ) {
                $longEdit[0].css('overflow', 'hidden');
                $longEdit[0].style.height = '20px';
			} else if( inMaxHeight && h > inMaxHeight ) {
                $longEdit[0].style.height = inMaxHeight + 'px';
                $longEdit[0].css('overflow', 'auto');
			} else {
                $longEdit[0].css('overflow', 'hidden');
                $longEdit[0].style.height = $longEdit[0].scrollHeight + 'px';
			}
            $longEdit.trigger( 'vui-longedit-change' );
        }
	} );

	vui.addClassInitializer(
		'vui-longedit',
		function( node ) {
			$( node ).vui_longEdit();
		}
	);

} )( window.jQuery );