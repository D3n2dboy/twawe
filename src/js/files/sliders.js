/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Grid } from 'swiper';


/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
//mport "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
//import 'swiper/css';
let swiper;
// Инициализация слайдеров
function initSliders() {

	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.cleaning__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		swiper = new Swiper('.cleaning__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Grid],
			// observer: true,
			// observeParents: true,
			//virtualTranslate: false,
			//loop: true,
			// effect: 'fade',
			// fadeEffect: {
			// 	crossFade: true
			// },
			// slidesPerView: 2,
			// grid: {
			// 	rows: 2,
			// 	fill: 'column',
			// },
			// spaceBetween: 30,
			// slidesPerGroup: 2,




			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,


			// // Эффекты



			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.my-perw-button',
			// 	nextEl: '.my-next-button',
			// },

			// Брейкпоинты

			breakpoints: {
				768: {
					slidesPerView: 2,
					grid: {
						rows: 2,
						fill: 'column',
					},
					spaceBetween: 30,
					slidesPerGroup: 2,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.gallery__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.gallery__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			slidesPerView: 3,
			spaceBetween: 30,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.gallegy-perw-button',
				nextEl: '.gallegy-next-button',
			},


			spaceBetween: 20,               // отступы между слайдами
			loop: false,

			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				468: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				968: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.recommendations__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.recommendations__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			slidesPerView: 3,
			spaceBetween: 30,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.recommendations-perw-button',
				nextEl: '.recommendations-next-button',
			},


			spaceBetween: 20,               // отступы между слайдами
			loop: false,

			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				468: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				968: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
	}


	if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			slidesPerView: 3,
			spaceBetween: 30,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.reviews-perw-button',
				nextEl: '.reviews-next-button',
			},


			spaceBetween: 20,               // отступы между слайдами
			loop: false,

			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				700: {
					slidesPerView: 2,
					spaceBetween: 20,
				},

				968: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});
	}
}

// Анимация + переключение вручную
function isLastGroup() {
	let viewportWidth = window.innerWidth;
	if (viewportWidth <= 768) return;

	const slidesPerPage = swiper.params.slidesPerGroup * swiper.params.grid.rows; // 2 * 2 = 4
	const remainingSlides = swiper.slides.length - (swiper.activeIndex * 2);
	return remainingSlides <= slidesPerPage;
}


function isFirstGroup() {
	return swiper.activeIndex === 0;
}

function fadeSwitch(direction) {
	if (direction === 'next' && isLastGroup()) {
		//console.log('isEnd (custom)');
		return;
	}
	if (direction === 'prev' && isFirstGroup()) {
		//console.log('isBeginning (custom)');
		return;
	}

	const slider = document.querySelector('.swiper');
	slider.classList.add('_fade-active');

	setTimeout(() => {
		if (direction === 'next') {
			swiper.slideNext(0, false);
		} else {
			swiper.slidePrev(0, false);
		}
		slider.classList.remove('_fade-active');
	}, 600);
}


// Кнопки
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

if (nextButton || prevButton) {
	nextButton.addEventListener('click', () => fadeSwitch('next'));
	prevButton.addEventListener('click', () => fadeSwitch('prev'));
}

// const swiper = new Swiper('.swiper', {
// 	slidesPerView: 2,
// 	grid: {
// 		rows: 2,
// 		fill: 'column',
// 	},
// 	spaceBetween: 30,
// 	allowTouchMove: false,
// 	speed: 0,
// });

// // Анимация + переключение вручную
// function fadeSwitch(direction) {
// 	const slider = document.querySelector('.swiper');

// 	slider.classList.add('_fade-active');

// 	setTimeout(() => {
// 		if (direction === 'next') {
// 			swiper.slideNext(4000, false); // вручную, без вызова slideChange
// 		} else {
// 			swiper.slidePrev(4000, false);
// 		}

// 		slider.classList.remove('_fade-active');
// 	}, 400); // время анимации
// }

// // Кнопки
// document.querySelector('#next').addEventListener('click', () => fadeSwitch('next'));
// document.querySelector('#prev').addEventListener('click', () => fadeSwitch('prev'));

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});