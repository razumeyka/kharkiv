$(document).ready(function(){    
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
    
    var slideNow = 1;   
    var slideCount = console.log($('.slidewrapper .slide').length);
    var navBtnId = 0;
	    
    $('.item').click(function(event) { 
        event.preventDefault();
        $('.item').find('.outline').removeClass('active');
        $(this).find('.outline').addClass('active');
        navBtnId = $(this).index();
            $('.slidewrapper').css(
                'margin-left','-'+navBtnId+'00%'); 
    });
    
    $('.radio_button input[checked="checked"]').closest('.radio_button').addClass('active');

    $('.radio_button').click(function(){
        $(this).parent().find('.radio_button').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('changed');
    });   
        
    $('.radio_button.traine').click(function(){
        $('.tables').addClass('active');
    });
    
    $('.radio_button.retraine').click(function(){
        $('.tables').removeClass('active');
    });
});