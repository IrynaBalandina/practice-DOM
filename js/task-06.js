// Отримуємо доступ до input
// Отримуємо значення атрибуту data-length за допомогою dataset та приводимо його значення до числа
// Вішаємо на нього прослухувач подіі "blur"
// Робимо перевірку умови на правильну кількість цифр
// Додаємо і видаляємо класи valid та invalid та відображення стилів в залежності від виконання умови вводу

const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur",event =>{
    if(inputEl.value.length === Number(inputEl.dataset.length)){
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }else{
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
});