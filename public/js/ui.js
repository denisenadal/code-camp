$(document).ready(function(){
	$('#main-menu').click(function(){
		$('#main-menu-drop').toggle();
	});

	$('.add-repeater').click(function(){
		fieldRepeater(this);
	});
	$('#builder .button').click(function(){
		$('#builder .button').removeClass('is-outlined');
		$(this).addClass('is-outlined');
	});
	$('#builder .res-template').click(function(){
		$('#builder').removeClass('invalid');
		var color = $('#builder .button.is-outlined').css('background-color');
		$('#print-res .stripe::before').css('background-color',color);
		$('#print-res h2, #print-res h1').css('color',color);
	});


});

function fieldRepeater(clicked){
	var type = $(clicked).attr('id').slice(4);
	console.log(type);
	var lastEntry = $('.'+type+'-set').last();
	console.log(lastEntry);
	var num = lastEntry.attr('id').replace(/^\D+/g,'');
	console.log(lastEntry.attr('id'));
	num = parseInt(num);
	console.log("old numis: "+num);
	var newID = type+(num+1);
	console.log(newID);
	var newEntry = $('#'+type+'0').clone(true,true).attr('id',newID);
	newEntry.html(function(){
		return $(this).html().replace(new RegExp(type+0, "g"), type+(num+1) );
	});
	newEntry.insertAfter(lastEntry).show();
}
