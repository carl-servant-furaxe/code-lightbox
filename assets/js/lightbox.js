/**
 * LIGHTBOX
**/
(function($) {
	var modal_trigger;

	$('body').append(`
		<div id="lightbox" tabindex="0" role="dialog" aria-hidden="false" arial-label="" data-layout="">
			<div class="lightbox-overlay"></div>
			<div class="lightbox-content">
				<button type="button" id="lightbox-close-begin" class="lightbox-close" aria-label="Fermer la fenetre" title="Fermer la fenetre"></button>
				<div id="lightbox-content"></div>
				<button type="button" id="lightbox-close-end" class="lightbox-close" aria-label="Fermer la fenetre" title="Fermer la fenetre"></button>
			</div>
		</div>
	`);

	function openLightbox(content, label, layout =''){
		$('html').addClass('is-lightbox');
		$('#lightbox-content').html(content);
		$('#lightbox').attr('aria-label', label).attr('data-layout', layout).focus();
	}


	$(document).on('click', 'a[data-lightbox]', function(){
		if($(window).width() <= 1024) return true;
		modal_trigger = $(this);
		var layout = $(this).attr('data-lightbox');
		var url = $(this).attr('href');
		var label = $(this).text();
		var content = '';
		switch(layout){
			case 'video':
				content = `
					<div class="player">
						<div class="player-iframe"><iframe src="${url}"></iframe></div>
						<div class="player-content">
							<div class="player-caption"></div>
							<div class="player-cta"></div>
						</div>
					</div>
				`;
			break;
			case 'iframe':
			case 'iframe-video':
			default:
				var content  = `<iframe src="${url}" height="300" width="300">`;
			break;
		}
		openLightbox(content, label, layout);
		return false;
	});

	/*

	$(document).on('click', '.video a', function(){
		if(window.media_queries['mobile'].matches) return true;

		modal_trigger = $(this);
		var video = $(this).parents('.video');
		var link = video.find('.video-cta a');


		openLightbox(content, 'Lecture de video','video');
		return false;
	});
	/**/


	$(document).on('keyup', '#lightbox', function(event){
		if(event.keyCode != 27) return;
		$('html').removeClass('is-lightbox');
		$('#lightbox-content').html('');
		modal_trigger.focus();
	});
	$(document).on('keyup', '#lightbox', function(event){
		if(!(event.shiftKey && event.keyCode == 9)) return;
		$('#lightbox-close-end').focus();
	});
	$(document).on('keyup', '#lightbox-close-end', function(event){
		if(event.keyCode != 9) return;
		$('#lightbox').focus();
	});
	$(document).on('click', '#lightbox .lightbox-overlay, #lightbox .lightbox-close', function(){
		$('html').removeClass('is-lightbox');
		$('#lightbox-content').html('');
		modal_trigger.focus();
		return false;
	});
})(jQuery);
