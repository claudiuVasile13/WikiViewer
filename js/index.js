$(document).ready(function() {
 
  $('input').on('keypress', function (event) {
    if(event.which === 13){  
     if($('input').val() !== '') {
        
        var inputVal = $('input').val();
        var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + inputVal + "&callback=?";

        $.getJSON(api, function(wiki) {
            $('#results').text('');
            // console.log(wiki);
            var obj = wiki.query.pages;
            console.log(obj);
            for(var data in obj) {
              var title = obj[data].title;
              var content = obj[data].extract;
              var redirect = 'https://en.wikipedia.org/?curid=' + data;            
              $("<li> <a href='" + redirect + "' target='_blank'>" + title + "</a> <p>" + content + "</p> </li>").hide().css('opacity',0.0).prependTo($('#results')).slideDown('slow').animate({opacity: 1.0});
            }
            $('input').val('');
        });
      
      }// second if
    }//first if
  });// keypress
  
});