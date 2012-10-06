$(function(){

	$("#import-list").on('shown', function(){
		$(this).find("textarea").focus();
	});

	$(".add-single-region").keydown(function(e){
		var val = $(this).val();

		if(e.which === 13){
			$(".added-regions").prepend($('<li>' + val + '</li>'));		
			$(this).val('');
		}
	});

});