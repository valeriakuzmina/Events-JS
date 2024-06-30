// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// 2. Используйте HTML для создания элементов интерфейса.

// 3. Используйте JavaScript для обработки событий:

// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// 4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// 5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const images = document.querySelectorAll(".slide");
const controlButton = document.querySelectorAll(".control");
const circleEls = document.querySelectorAll(".circle");

let imgIndex = 0;

function slideShow(index) {
  images[imgIndex].classList.remove("active");
  images[index].classList.add("active");
  imgIndex = index;
}

controlButton.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (e.target.classList.contains("button-left")) {
      let index = imgIndex - 1;
      if (index < 0) {
        index = images.length - 1;
      }
      slideShow(index);
    } else if (e.target.classList.contains("button-right")) {
      let index = imgIndex + 1;
      if (index >= images.length) {
        index = 0;
      }
      slideShow(index);
    }
  });
});

circleEls.forEach((e) => {
    e.addEventListener("click", (e) => {
        const targetIndex = parseInt(e.target.getAttribute("data-index"), 10);
        slideShow(targetIndex);
      });
    e.addEventListener("mousedown", (e) => {
        e.target.classList.add("circle-1");

    })
    e.addEventListener("mouseout", (e) => {
        e.target.classList.remove("circle-1");

    })
  });

slideShow(imgIndex);
