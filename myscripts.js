
var getNewQuote = function() {
 $.ajax({
   url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote&lang=en',
   type: 'GET',
   contentType: 'application/json',
   dataType: 'jsonp'
 });
}
function parseQuote (json){

 $("#quote").html(json.quoteText).fadeIn("slow");
   var quot = 'https://twitter.com/intent/tweet?text=' + json.quoteText + '-' + json.quoteAuthor
   function get_random_color() {
   var letters = '0123456789ABCDEF'.split('');
   var color = '#';
   for (var i = 0; i < 6; i++ ) {
       color += letters[Math.round(Math.random() * 15)];
   }
   return color;
}

$(".body").each(function() {
   $(this).css("background-color", get_random_color()).fadeIn("slow");
});

    $(".share-tweet").attr("href", quot)
 if((json != null) && ( json.quoteAuthor === "")){
   $("#author").html("Unknown Author");
 }
 else{
   $("#author").html(json.quoteAuthor);
 }

}

$(document).ready(function() {
 // get a random quote when page loads
 getNewQuote();
 $('.button').click(getNewQuote);



});
