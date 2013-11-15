( function( $ ) {

	$.widget( "vui.vui_longEdit", {

		options: {
			MaxHeight: 0,
            MinHeight: '20px'
		},

		_create: function() {
			var $longEdit = $( this.element );
            var op = this.options;
            
			op.MaxHeight = $longEdit.attr( 'data-longedit-maxheight' ) !== undefined ? $longEdit.attr( 'data-longedit-maxheight' ) : op.MaxHeight;
            op.MinHeight = $longEdit.attr( 'data-longedit-minheight' ) !== undefined ? $longEdit.attr( 'data-longedit-minheight' ) : op.MinHeight;

			var that = this;
			$longEdit.keydown( function( e ) {
				that._textAreaAdjust( $longEdit, op.MaxHeight, op.MinHeight );
			} );

			$longEdit.change( function( e ) {
				that._textAreaAdjust( $longEdit, op.MaxHeight, op.MinHeight );
			} );
		},

		_textAreaAdjust: function( $longEdit, inMaxHeight, inMinHeight ) {

			$longEdit[0].style.height = '0px';
			$longEdit[0].style.padding = '0px';
			
            var h = $longEdit[0].scrollHeight;
            var min = parseInt( inMinHeight, 10 );
            var max = parseInt( inMaxHeight, 10 );
            
			if( h < min ) {
                $longEdit.css('overflow', 'hidden');
                $longEdit[0].style.height = inMinHeight;
			} else if( max && h > max ) {
                $longEdit[0].style.height = inMaxHeight;
                $longEdit.css('overflow', 'auto');
			} else {
                $longEdit.css('overflow', 'hidden');
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