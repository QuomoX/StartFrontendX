var counter = 0;
function clickb(el) {
    counter++;
    el.innerHTML = "Вы нажали на кнопку: " + counter;
    el.style.cssText = "border-radius: 5px; border: 0; fonr-size: 20px";
    console.log(el.onclick);
}
function onInput(el) {
    if(el.value == "Hello")
alert ("and you");
    console.log(el.value);
}
var text = document.getElementById('text');
text.title = "New text";
console.log(text.title);
text.style.color = "red";
text.style.backgroundColor = "blue";
text.innerHTML = "Личный кобинет ООО «ТАРАСОВО»";

var spans = document.getElementsByClassName('simple-text');

for(var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}

document.getElementById('main-form').addEventListener("submit, checkForm");

function checkForm(event) {
    event.preventDefault();
    var el = document.getElementById('main-form');
    var name = el.name.value;  
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;
 //обьявление переменных формы
    var fail = ""; // Переменная при неправильно заполненной формы
    if(name == "" || pass == "" || state == "") // если одно из полей пустое
    fail = "Заполните все поля";
    else if(name.length < 2 || name.length > 50)  //ограничение на кол-во знаков
        fail = "Введите корректное имя";
    else if(pass != repass) 
        fail = "Пароли должны совпадать";
    else if(pass.split("&").length > 1)
        fail = "Некорректный пароль";
    if(fail != "")  // Если переменная fail равна "" , то ...
        document.getElementById('error').innerHTML = fail;
    else {
        alert("Все данные корректно заполнены");
        window.location = '2str.html'; // Переход после заполнения формы
    }
}
setInterval(my_func, 1000);
function my_func() {
    counter++;
    console.log("Counter: " + counter); 
}