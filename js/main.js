$(document).ready(function(){    
    $('.wpcf7-list-item input[checked="checked"]').closest('.wpcf7-list-item').addClass('active');

    $('.wpcf7-list-item').click(function(){
        $(this).parent().find('.wpcf7-list-item').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('changed');
    });
    
    $( '.burger' ).click( function() {
        if ( $( '.navbar' ).is( ':hidden' ) ) {
    $( '.navbar' ).show('slideToggle');
    $( ".burger" ).addClass( "active" );
        } else {
    $( '.navbar' ).hide('slideToggle');
    $( ".burger" ).removeClass( "active" );
        }
    });
});