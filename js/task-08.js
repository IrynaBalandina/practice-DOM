// Отримуємо доступ до форми
// Вішаємо слухача подій submit на кнопку
// Прибираємо перезавантаження сторінки за замовчуванням
// за допомогою preventDefault
// Робимо перевірку на заповлення всіх полей і виводимо 
// alert, якщо якесь поле пусте
// В іншому випадку (коли два поля заповлені), створюємо об'єкт, 
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості
// До значення властивостей достукуємося через form
// Виводимо об'єкт в консоль і при відправці форми очищаємо поля методом reset


const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);
function onSubmit(e){
    e.preventDefault();
    console.dir(formEl);
    if(formEl.elements.email.value ===""||formEl.password.value === "" ){
        alert("All filds must be filled in");
    }else{
        const object = {
            email:formEl.email.value,
            password:formEl.password.value
        };
        console.log(object);
    }
    formEl.reset();
};