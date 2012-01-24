var links = new Array();
var i = 0;
var colors = new Array(
		'#ffb6c1',
		'#ffc0cb',
		'#dc143c',
		'#ffF0F5',
		'#ff69b4',
		'#db7093',
		'#ff1493',
		'#c71585',
		'#da70d6',
		'#d8bFd8',
		'#dda0dd',
		'#ee82ee',
		'#ff00ff',
		'#ff00ff',
		'#8b008b',
		'#800080',
		'#ba55d3',
		'#9400d3',
		'#9932cc',
		'#4b0082',
		'#8a2be2',
		'#9370db',
		'#7b68ee',
		'#6a5acd',
		'#483d8b',
		'#000080',
		'#191970',
		'#0000cd',
		'#0000ff',
		'#e6e6Fa',
		'#F8F8ff',
		'#00008b',
		'#4169e1',
		'#6495ed',
		'#b0c4de',
		'#708090',
		'#778899',
		'#1e90ff',
		'#F0F8ff',
		'#4682b4',
		'#87ceFa',
		'#87ceeb',
		'#00bffF',
		'#add8e6',
		'#b0e0e6',
		'#5F9ea0',
		'#00ced1',
		'#F0ffff',
		'#e0ffff',
		'#aFeeee',
		'#00ffff',
		'#00ffff',
		'#2F4F4F',
		'#008b8b',
		'#008080',
		'#48d1cc',
		'#20b2aa',
		'#40e0d0',
		'#7ffFd4',
		'#66cdaa',
		'#00Fa9a',
		'#F5ffFa',
		'#00ff7F',
		'#3cb371',
		'#2e8b57',
		'#F0ffF0',
		'#90ee90',
		'#98Fb98',
		'#8Fbc8F',
		'#32cd32',
		'#00ff00',
		'#228b22',
		'#008000',
		'#006400',
		'#7ffF00',
		'#7cFc00',
		'#adff2F',
		'#556b2F',
		'#9acd32',
		'#6b8e23',
		'#F5F5dc',
		'#FaFad2',
		'#ffffF0',
		'#ffffe0',
		'#ffff00',
		'#808000',
		'#bdb76b',
		'#eee8aa',
		'#ffFacd',
		'#F0e68c',
		'#ffd700',
		'#ffF8dc',
		'#daa520',
		'#b8860b',
		'#fffaf0',
		'#fdf5e6',
		'#f5deb3',
		'#ffa500',
		'#ffe4b5',
		'#ffefd5',
		'#ffebcd',
		'#ffdead',
		'#faebd7',
		'#d2b48c',
		'#deb887',
		'#ffe4c4',
		'#ff8c00',
		'#faf0e6',
		'#cd853f',
		'#ffdab9',
		'#f4a460',
		'#d2691e',
		'#8b4513',
		'#fff5ee',
		'#a0522d',
		'#ffa07a',
		'#ff7f50',
		'#ff4500',
		'#e9967a',
		'#ff6347',
		'#ffe4e1',
		'#fa8072',
		'#fffafa',
		'#f08080',
		'#bc8f8f',
		'#cd5c5c',
		'#ff0000',
		'#a52a2a',
		'#b22222',
		'#8b0000',
		'#800000',
		'#ffffff',
		'#f5f5f5',
		'#dcdcdc',
		'#d3d3d3',
		'#c0c0c0',
		'#a9a9a9',
		'#808080',
		'#696969',
		'#000000'
);

function callback() {
	$(this).css('position', 'relative');
	
	var link = $(this).attr('href');
	
	var color = 'red';
	if (!link) {
		color = 'black';
	} else if (links[link]) {
		color = links[link];
	} else {
		if (i < colors.length) {
			color = links[link] = colors[i++];
		} else {
			color = 'black';
		}
	}
	
	if (color == undefined) {
		color = 'black';
	}
	
	$(this).append('<div class="facebook-anon" style="background:' + color + ';position:absolute;top:0px;right:0px;bottom:0px;left:0px;"></div>');
}

$('#pagelet_sidebar').css('display', 'none');
$('.actorPhoto, .actorPic, a[data-hovercard], .actorName a, a.actorName, ' +
		'.passiveName, .fbChatOrderedList li a, .headerTinymanName, .unitHeader .fcg .fwb a, .friendSubtitle a, ' +
		'#pagelet_welcome_box a').each(callback);
$('.uiProfilePhoto').each(function() { $(this).parent().each(callback); });

// remove hider from comments
$('.mentionsAddComment .facebook-anon').hide();