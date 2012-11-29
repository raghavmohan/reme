window.onload = function() {
	$('.navbar-inner a').click(function() {
		var id = parseInt($(this).attr('id').substring(4));
		$(".nav li").removeClass('active');
		if (id > 0) { $('.nav li:eq(' + (id - 1) + ')').addClass('active'); }
		$('.carousel').carousel(id);
		$('.carousel').carousel('pause');
	});
};
