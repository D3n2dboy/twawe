// Получаем все нужные элементы
var elements = document.querySelectorAll('.item-cooperation__number');

let arrow = document.querySelector('.cooperation__line');
isVisible(arrow);
// Функция проверки видимости одного элемента
var isVisible = function (target) {
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
    };

    var windowPosition = {
        bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    // Проверка: элемент виден хотя бы наполовину
    return (targetPosition.top < windowPosition.bottom - window.innerHeight / 2);
};

// Проверка всех элементов
function checkVisibleItems() {
    elements.forEach(function (el) {
        if (isVisible(el)) {
            el.classList.add('visible'); // добавь свой класс
            console.log('Виден элемент:', el);
        } else {
            el.classList.remove('visible'); // если хочешь убирать
        }
    });
}

// Слушатель на scroll
window.addEventListener('scroll', checkVisibleItems);

// И сразу вызываем на случай, если уже видно
checkVisibleItems();
