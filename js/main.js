$(document).ready(function() {
  $.getJSON('http://api.dailymile.com/people/harishv/entries.json?callback=?', function(json) { 
	  /*
	   * Return JSON Object from Dailymile. Fields of interest
	   * 
	   * Entries : Contains all workouts. An array object
	   * Entries[i].at : Posted time
	   * entries[i].user.display_name : User Name
	   * entries[i].user.url : Profile URL
	   * entries[i].workout.activity_type : Type of Activity
	   * entries[i].workout.activity_type.distance.value : Distance covered in the workout
	   * entries[i].workout.activity_type.distance.units : Unit of measurement
	   * entries[i].workout.felt : How I felt
	   * entries[i].url : Url of the posted workout
	   * 
	   * 	
	   */
	  
	  var entries = json.entries;
	  alert(entries.length);
	  $('#twitter_followers').text(json.followers_count); //get the follower_count from the json object and put it in a span
  });
  
  $.get('http://snipplr.com/all/language/jquery', function(res) { //get the html source of this website
    $(res.responseText).find('.snippets li h3').each(function() { //loop though all h3 in the snippets list
      var anchor = $(this).children('a:last'); //get the actual link with the text inside
        
      jQuery('<li/>', { //build a li element
        html: jQuery('<a/>', { //with a A element inside it
                href: 'http://snipplr.com' + anchor.attr('href'), //set the href for the link
                text: anchor.text() //and the text
              })
      }).appendTo($('#jquery_snippets')); //append it to a list
    });
      
    $('#jquery_snippets li:first').remove(); //remove this first li ("Loading...") when done
  });
});