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

		static calcDistance(first, second, third) {
			const distanceSegment = {
				a: Math.hypot((first.x - second.x), (first.y - second.y)),
				b: Math.hypot((second.x - third.x), (second.y - third.y)),
				c: Math.hypot((third.x - first.x), (third.y - first.y)),
			}
		}
	}

	const getDataClick = (data) => {
		if (Array.isArray(data) && data.length >= 3) {
			const firstPoint = data[data.length - 3];
			const secondPoint = data[data.length - 2];
			const thirdPoint = data[data.length - 1];
			PointClick.calcDistance(firstPoint, secondPoint, thirdPoint);
		}
	}

    window.addEventListener('click', (e) => {
		const get = new PointClick(e.pageX, e.pageY);
		dataArr.push(get);
		getDataClick(dataArr);
	});

	/*Calc area triangle */

	/*determine mouses scroll*/
	const navbar = document.querySelector('.js-scroll-navigation');
	window.addEventListener('wheel', handleDOMContentLoaded = (e) => {
		let delta = 0;
		if (e.deltaY < 0 && navbar) {
			navbar.classList.add('navigation__scroll-up');
		} else {
			navbar.classList.remove('navigation__scroll-up');
		}
	});
})();
