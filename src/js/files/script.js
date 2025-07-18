// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item-cooperation__number");
    items.forEach((el, index) => {
        console.log(el);
        el.textContent = String(index + 1).padStart(2, '0');
    });
});

/* 
1 ) получаем высоту вьюпорта
2) получаем высоту до элемента
3) добавляем класс элементу если он во вьюпорте
4) 
*/

// Получаем все нужные элементы
var elements = document.querySelectorAll('.item-cooperation__number');
var elementsTitle = document.querySelectorAll('.item-cooperation__title');


// Функция проверки видимости одного элемента
var isVisible = function (target) {
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
    };

    var windowPosition = {
        bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    // Проверка: элемент виден хотя бы наполовину
    return (targetPosition.top < windowPosition.bottom - window.innerHeight / 3);
};

// Проверка всех элементов
function checkVisibleItems() {
    elements.forEach(function (el) {
        if (isVisible(el)) {
            el.classList.add('visible'); // добавь свой класс
            //console.log('Виден элемент:', el);
        } else {
            //el.classList.remove('visible'); // если хочешь убирать
        }
    });

    elementsTitle.forEach(function (el) {
        if (isVisible(el)) {
            el.classList.add('active'); // добавь свой класс
            //console.log('Виден элемент:', el);
        } else {
            //el.classList.remove('visible'); // если хочешь убирать
        }
    });
}

// Слушатель на scroll
window.addEventListener('scroll', checkVisibleItems);

// И сразу вызываем на случай, если уже видно
checkVisibleItems();


const block = document.querySelector('.cooperation__items');
const dot = document.querySelector('.cooperation__dot');
const lineTwo = document.querySelector('.cooperation__line-two');

function updateDotPosition() {

    if (block) {
        const rect = block.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const blockHeight = rect.height;
        const startTrigger = windowHeight / 1.265;

        if (block.classList.contains('_stop-anim')) {
            return
        }
        else {
            if (rect.top < startTrigger && rect.bottom > 0) {
                // Сколько % блока уже в половине экрана
                const progress = (startTrigger - rect.top) / (blockHeight);
                const clampedProgress = Math.max(0, Math.min(progress, 1));
                console.log('blockHeight', blockHeight);

                // Смещение точки по высоте
                dot.style.top = `${clampedProgress * (blockHeight - 10)}px`; // 10 — высота точки
                lineTwo.style.height = `${clampedProgress * (blockHeight)}px`; // 10 — высота точки
                if ((clampedProgress * (blockHeight - 10) == blockHeight - 10)) {
                    block.classList.add('_stop-anim');
                }
            }
        }
    }
}

window.addEventListener('scroll', updateDotPosition);
window.addEventListener('resize', updateDotPosition);
updateDotPosition(); // при загрузке


/*  file */

const formFile = document.getElementById('formFile');
const fileButton = document.querySelector('.file__button');

if (formFile || fileButton) {
    formFile.addEventListener('change', () => {
        uploadFile(formFile.files[0]);
    });
}

function uploadFile(file) {

    if (fileButton.classList.contains('active')) {
        formFile.value = '';
        fileButton.textContent = 'Прикрепить файл';
        fileButton.classList.remove('active');
    }

    if (file) {
        if (!['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
            alert('Разрешены только: docx, xlsx, PNG, SVG, PDF, JPG');
            formFile.value = '';
            return;
        }
        if (file.size > 25 * 1024 * 1024) {
            alert('Файл не должен быть больше 25 мб');
            return;
        }

        fileButton.textContent = file.name;
        fileButton.classList.add('active');
    }
}
