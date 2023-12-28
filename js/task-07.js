// Отрумуємо доступ до input і text
// Вішаємо слухача подій на input
// Створюємо функцію
// Звертаємося до властивості fontSize елемента text
// і присвоюємо їй поточне значення елементу fontSizeControl у пікселях

const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");
inputEl.addEventListener("input", inputSizeControl);

function inputSizeControl(e){
    textEl.style.fontSize = `${e.target.value}px`;
}