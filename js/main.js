/*!
 * 
 * SWFAddress Handle here
 *
 */
var title = document.title;
var track = function() {
	//console.log('track: ' + arguments[0]);
};
// Serialization utility
var serialize = function(obj, re) {
	var result = [];
	$.each(obj, function(i, val) {
		if ((re && re.test(i)) || !re)
			result.push(i + ': ' + (typeof val == 'object' ? val.join 
				? '\'' + val.join(', ') + '\'' : serialize(val) : '\'' + val + '\''));
	});
	return '{' + result.join(', ') + '}';
};
$.address.init(function(event) {
    
}).change(function(event) {
	//console.log('change: ' + serialize(event, /parameters|parametersNames|path|pathNames|queryString|value/));
	goPage(event.pathNames);
	
	//output sub pages
	if(event.parameters.sample!=undefined){
		$('.page2Output').html("Output "+event.parameters.sample)
	}
})

/*!
 * 
 * All your scripts insert here
 * 
 */
$(function() {
	console.log( "ready!" );
	$('#anime').animate({padding:75}, 500);
});

function goPage(sPage){
	sPage=sPage==''?'home':sPage;
	var pageCheck=sPage=='home'?'/':sPage;
	
	$('#navigation li').each(function(){
		//remove highlighted class
		$(this).removeClass('selected');
		
		//grab navigation address
		var curRel=$(this).find('a').attr('rel');
		//remove address:/
		curRel=curRel.substring(9,curRel.length-1);
		//check page exist
		if(curRel==pageCheck){
			//add highlight class
			$(this).addClass('selected');
			//toggle contens
			$('.mainContent').each(function(){
				$(this).hide();
			});
			$('.mainWrapper').find('#'+sPage).show();
		}
	});
}