function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо доступи до span і кнопки та body 
// Вішаємо слухача подій на кнопку
// Створюємо функцію
// У функції через style знаходимо властивість backgroundColor на body 
// і прирівнюємо до ф-ї getRandomHexColor для регенування кольору
// У span виводимо текст кольору

const spanEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

const btnEl  = document.querySelector(".change-color");

btnEl.addEventListener("click",onClick);

function onClick(e){
bodyEl.style.backgroundColor = getRandomHexColor();
text.textContent = getRandomHexColor;
};