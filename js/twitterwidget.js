function getTwitterWidget(){

	var twitterWidget = new TWTR.Widget({
	  version: 2,
	  type: 'profile',
	  rpp: 4,
	  interval: 6000,
	  width: 250,
	  height: 300,
	  theme: {
		shell: {
		  background: '#333333',
		  color: '#ffffff'
		},
		tweets: {
		  background: '#000000',
		  color: '#ffffff',
		  links: '#9ff3f'
		}
	  },
	  features: {
		scrollbar: false,
		loop: false,
		live: true,
		hashtags: true,
		timestamp: true,
		avatars: false,
		behavior: 'all'
	  }
	});
	return twitterWidget;
};