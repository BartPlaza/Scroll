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
		currentHeight: '',
		itemHeight: ''
	},
	methods: {
		scrolling: function(event){
			event.preventDefault();
			var itemHeight = box1.offsetHeight;
			this.itemHeight = itemHeight;
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
			this.currentHeight = window.pageYOffset;
		},
		back: function(){
			window.scrollTo(0, 0);
		},
		change: function(){
			this.currentHeight = window.pageYOffset;
        	this.itemHeight = box1.offsetHeight;
		}
	},
	 created: function () {
        window.addEventListener('wheel', this.scrolling);
        window.addEventListener('scroll', this.change);
        var vm = this;
        setTimeout(function(){
        	vm.change;
        },500);
    },
    destroyed: function () {
        window.removeEventListener('wheel', this.scrolling);
        window.removeEventListener('scroll', this.change);
    }
});