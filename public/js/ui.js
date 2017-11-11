$(document).ready(function(){
	$('#main-menu').click(function(){
		$('#main-menu-drop').toggle();
	});

	$('.add-repeater').click(function(){
		fieldRepeater(this);
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
