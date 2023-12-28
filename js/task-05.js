// Отримуємо доступи до name-input і name-output
// Вішаємо прослуховувач подій "input" на nameInput
// При подіі іnput текст output змінюється на поточне 
// значення input або строка "Anonymous", якщо поле пусте 
// Виводимо в консоль результат

const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");
inputEl.addEventListener("input",onClick);
function onClick(event){
    outputEl.textContent = event.currentTarget.value ||"Anonymous"
}
console.log(outputEl);