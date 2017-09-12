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
					clearInterval(window.interval);
					var height = window.pageYOffset;
					window.interval = setInterval(function(){
						if(window.pageYOffset < height + itemHeight - difference){
							if((height + itemHeight - difference) - window.pageYOffset > 5){
									window.scrollBy(0,5);
								}else {
									window.scrollBy(0,1);
								}
						}else {
							clearInterval(window.interval);
						}
					}, 1);
					//window.scrollBy(0, itemHeight - difference);
				} else {
					clearInterval(window.interval);
					var height = window.pageYOffset;
					window.interval = setInterval(function(){
						if(window.pageYOffset > height - difference){
							if(window.pageYOffset - (height - difference) > 5){
									window.scrollBy(0,-5);
								}else {
									window.scrollBy(0,-1);
								}
						}else {
							clearInterval(window.interval);
						}
					}, 1);
					//window.scrollBy(0, -difference);
				}
			} else
				{
				if(event.deltaY > 0){
					clearInterval(window.interval);
					var height = window.pageYOffset;
					window.interval = setInterval(function(){
						if(window.pageYOffset < height + itemHeight){
							if(height + itemHeight - window.pageYOffset > 5){
								window.scrollBy(0,5);
							}else {
								window.scrollBy(0,1);	
							}
						}else {
							clearInterval(window.interval);
						}
					}, 1);
					//window.scrollBy(0, itemHeight);
				} else {
					clearInterval(window.interval);
					var height = window.pageYOffset;
					window.interval = setInterval(function(){
						if(window.pageYOffset > height - itemHeight){
							if(window.pageYOffset - (height - itemHeight) > 5){
								window.scrollBy(0,-5);
							}else{
								window.scrollBy(0,-1);
							}
						}else {
							clearInterval(window.interval);
						}
					}, 1);
					//window.scrollBy(0, -itemHeight);
				}
			}
			this.currentHeight = window.pageYOffset;
		},
		menu: function(multiplayer){
			clearInterval(window.interval);
			window.interval = setInterval(function(){
						if(window.pageYOffset < multiplayer * box1.offsetHeight){
							if(multiplayer * box1.offsetHeight - window.pageYOffset > 5){
								window.scrollBy(0,5);
							}else {
								window.scrollBy(0,1);
							}
						}else if(window.pageYOffset > multiplayer * box1.offsetHeight){
							if(window.pageYOffset - multiplayer * box1.offsetHeight > 5){
								window.scrollBy(0,-5);
							}else {
								window.scrollBy(0,-1);
							}
						} else {
							clearInterval(window.interval);
						}
					}, 1);

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