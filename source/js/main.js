(function research() {

	/*Create class*/
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

	/*Calc distance between twice click*/	
	let dataArr = [];
	class PointClick {
		constructor(x, y) {
			this.x = x;
			this.y = y;
		}

		static calcDistance(first, second) {
			const dx = first.x - second.x;
			const dy = first.y - second.y;
			console.log(Math.hypot(dx, dy));
		}
	}

	const getDataClick = (data) => {
		if (Array.isArray(data) && data.length > 2) {
			const firstPoint = data[data.length - 2];
			const secondPoint = data[data.length - 1];
			PointClick.calcDistance(firstPoint, secondPoint);
		}
	}

    window.addEventListener('click', (e) => {
		const get = new PointClick(e.pageX, e.pageY);
		dataArr.push(get);
		getDataClick(dataArr);
	});

	/*Calc area triangle */

})();