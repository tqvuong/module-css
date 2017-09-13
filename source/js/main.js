(function research() {
    class Rec {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.calArea();
        }
        
        calArea() {
            return this.width * this.height;
        }
	}
	
	let dataArr = [];
	class getDataClick {
		constructor(x, y) {
			this.x = x;
			this.y = y;
		}
	}

    window.addEventListener('click', (e) => {
		const get = new getDataClick(e.pageX, e.pageY);
		dataArr.push(get);
	});
	console.log(dataArr);


})();