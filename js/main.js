$(document).ready(function(){

//mobile menu   
    $( '.burger' ).click( function() { 
        $( '.navbar' ).slideToggle();
        $( '.burger' ).toggleClass( 'active' ); 
    });

	 $('.second_line .menu li' ).click(function(){
        $(this).find('.submenu').slideToggle(500);
    });		
		
// courses block

    $('.item').click(function(e) { 
		console.log('click');
        e.preventDefault();
        $('.item').find('.outline').removeClass('active');
        $(this).find('.outline').addClass('active');
        navBtnId = $(this).index(); 
        $('.slidewrapper').css('margin-left','-'+navBtnId+'00%'); 
    });
   
//radiobuttons ripples
   
    $('.radio_button input[checked="checked"]').closest('.radio_button').addClass('active');
	
//radiobuttons переключение блоков	

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