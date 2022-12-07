// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
$(".all").wrapAll("<div class='wrapper' />")
var wrapperEl = $('.wrapper');
var timeEl = $('.time-block');
var textEl = $('.description');
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // $(#btn-[i]).click(saveto() {
  //   console.log(hour[i]);
  // var current = hour[i];
  // localStorage.setItem([i], )
  // });
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //    
    var now = dayjs().format('H');
    var nownum = parseInt(now);
    
    $(wrapperEl).children().children().children().each(function(i){
      var id = $(wrapperEl).children().children().children().eq(i).attr('id')
      var idnum = parseInt(id);
      if(idnum==nownum){
        $(wrapperEl).children().children().children().eq(i).addClass('present');
      }
      else if(idnum<now){
        $(wrapperEl).children().children().children().eq(i).addClass('past');
      }
      else if (idnum>now){
        $(wrapperEl).children().children().children().eq(i).addClass('future');
      }
    });
    $('button').each(function(i){
      $(this).attr('id', 'bttn' + (i + 6));
    });
    
    
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    $('button').click(function(i){
      var bid = $(this).attr('id')
      console.log(bid);
      var text = $(textEl).val();
     localStorage.setItem('text'+ bid, text);
    });


    // TODO: Add code to display the current date in the header of the page.
var date = dayjs().format('MMM d, YYYY: HH:mm')
    $('#head').append(date);
  