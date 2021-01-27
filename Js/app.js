$(function(){


	/*menu-mobile*/
	$('.btn-mobile i').click(function(){

		var btn = $('nav.mobile ul');

		if(btn.is(':hidden') == true)
		{
			$('.btn-mobile > i').removeClass('fa fa-bars');
			$('.btn-mobile > i').addClass('fa fa-times');
			btn.slideToggle();
		} else {
			$('.btn-mobile > i').removeClass('fa fa-times');
			$('.btn-mobile > i').addClass('fa fa-bars');
			btn.slideToggle();
		}

	})

	/*scroll dinamico*/
	$('a').click(function(){
		var elemento = $(this).attr('href');
		if(elemento != undefined && elemento != '')
		{
			elementoOfSetTop = $(elemento).offset().top;

			$('body, html').animate({'scrollTop':elementoOfSetTop},1000);
			return false;
		}
		
	})

	/*animação hover*/

	AnimacaoHover();

	function AnimacaoHover(){

		$('.box-atividades-single').hover(
			function(){
				$(this).find('.content-atividades a').hide();
				$(this).find('.content-atividades p').fadeIn()
			},
			
			function(){
				$(this).find('.content-atividades a').show();
				$(this).find('.content-atividades p').css('display','none')

			}
		)
	}	
	// $('.box-atividades-single').mouseout(function(){
		
	// })


});