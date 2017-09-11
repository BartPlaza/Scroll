/*Vue.use(VueScrollTo, {
     container: "body",
     duration: 1500,
     easing: "ease",
     offset: 0,
     cancelable: true,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })
*/
new Vue ({
	el: '#container',
	data: {
		height: ''
	},
	methods: {
		scrolling: function(event){
			event.preventDefault();
			var itemHeight = box1.offsetHeight;
			//var height = window.pageYOffset;
			if(window.pageYOffset % itemHeight != 0)
			{
				var difference = window.pageYOffset % itemHeight;
				if(event.deltaY > 0) {
					window.scrollBy(0, itemHeight - difference);
				} else {
					window.scrollBy(0, -difference);
				}
			} else
				{
				if(event.deltaY > 0){
					window.scrollBy(0, itemHeight);
				} else {
					window.scrollBy(0, -itemHeight);
				}
			}

		},
		back: function(){
			window.scrollTo(0, 0);
		},
	},
	 created: function () {
        window.addEventListener('wheel', this.scrolling);
    },
    destroyed: function () {
        window.removeEventListener('wheel', this.scrolling);
    }
});