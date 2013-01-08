function dailymiledisplayer(divid, url, feedlimit){

	jQuery.getJSON(url+'?callback=?',function (json){

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
	 * entries[i].workout.duration : Duration
	 * entries[i].workout.title : Location of the workout 
	 * entries[i].url : Url of the posted workout
	 */
	var divid = "dailymilefeed";
	var feedlimit = 50;
	var outhtml = "<br/>";
	if(!(json==null))
	{
		outhtml = "<ul>";
		var entries = json.entries;
		alert(entries.length);
		var max = (feedlimit > entries.length) ? entries.length : feedlimit;
		for(var i = 0; i < max; i++)
		{
			
			var workOutType="<a href=\"" + entries[i].url+ "\">" + entries[i].workout.activity_type+ "</a>";
			var workOutLocation = entries[i].workout.title;
			var workOutDistance = entries[i].workout.distance.value + " " + entries[i].workout.distance.units;
			var workOutDuration = entries[i].workout.duration;
			
			outhtml = outhtml + "<li>";
			outhtml = outhtml + "<p>";
			outhtml = outhtml + workOutType + " at " + workOutLocation;
			outhtml = outhtml + "</p>";
			
			outhtml = outhtml + "<p>";
			outhtml = outhtml + "Covered "  + workOutDistance + " in " + workOutDuration;
			outhtml = outhtml + "</p>";
			
			outhtml = outhtml + "</li>";
		}
		outhtml = outhtml + "</ul>";
			
	}
	else
		alert("Error retrieving JSON object!");
	
	//var element = document.getElementById(divid);
	//element.innerHTML = outhtml;
	jQuery('#'+divid).html(outhtml); 
});
};

