$(document).ready(function(){    
    $('.radio_button input[checked="checked"]').closest('.radio_button').addClass('active');

    $('.radio_button').click(function(){
     $(this).parent().find('.radio_button').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('changed');
    });

    
    $( '.burger' ).click( function() {
        if ( $( '.navbar' ).is( ':hidden' ) ) {
    $( '.navbar' ).show('slideToggle');
    $( '.burger' ).addClass( 'active' );
        } else {
    $( '.navbar' ).hide('slideToggle');
    $( '.burger' ).removeClass( 'active' );
        }
    });
    
    $('.second_line .menu li' ).click(function(){
        $(this).find('.submenu').slideToggle(500);
    });
});