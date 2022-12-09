// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
$(".all").wrapAll("<div class='wrapper' />")
var wrapperEl = $('.wrapper');
var timeEl = $('.time-block');
var textEl = $('.description');


var now = dayjs().format('H');

var nownum = parseInt(now);

$(wrapperEl).children().children().children().each(function (i) {
  var id = $(wrapperEl).children().children().children().eq(i).attr('id')
  var idnum = parseInt(id);
  if (idnum == nownum) {
    $(wrapperEl).children().children().children().eq(i).addClass('present');
  }
  else if (idnum < now) {
    $(wrapperEl).children().children().children().eq(i).addClass('past');
  }
  else if (idnum > now) {
    $(wrapperEl).children().children().children().eq(i).addClass('future');
  }
});
// gives button corresponding ids
$('button').each(function (i) {
  $(this).attr('id', 'bttn' + (i + 8));
});
$('textarea').each(function (i) {
  $(this).attr('id', 'bttn' + (i + 8));
});



// On click, save to local storage

$('button').click(function () {
  for(var i =0;i<textEl.length;i++){
    var text = $('.description').eq(i).val();
    localStorage.setItem('text'+i, text);
  }
  });

// Display date in header
var date = dayjs().format('MMM d, YYYY: HH:mm')
$('#head').append(date);

// displays local data to text box
for (var i = 0;i<textEl.length;i++){
$(textEl[i]).text(localStorage.getItem('text'+i));
}
