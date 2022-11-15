let isbn = $('.book').data('isbn');

$.ajax({
  dataType: 'json',
  url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn,
  success: handleResponse
});

function handleResponse( response ) {
  $.each( response.items, function( i, item ) {
    
    var title    = item.volumeInfo.title,
        author   = item.volumeInfo.authors[0],        
        thumb    = item.volumeInfo.imageLinks.thumbnail;
    
    $('.title').text( title );
    $('.author').text( author );
    $('.thumbnail').attr('src', thumb);
  });

