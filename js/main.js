var counter = 0;

function clickb(el) {
    counter++;
    el.innerHTML = "Вы нажали на кнопку: " + counter;

    // el.style.background = "red";
    // el.style.color = "blue";

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

text.innerHTML = "New<br>string";

// document.getElementById('text').style.color = "white";

// var spans = document.getElementsByTagName('span');

var spans = document.getElementsByClassName('simple-text');

for(var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}

function checkForm(el) {

    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var fail = "";

    if(name == "" || pass == "" || state == "")
    fail = "Заполните все поля";
    else if(name.length < 2 || name.length > 50)
        fail = "Введите корректное имя";
    else if(pass != repass)
        fail = "Пароли должны совпадать";
    else if(pass.split("&").length > 1)
        fail = "Некорректный пароль";

    if(fail != "") {
        document.getElementById('error').innerHTML = fail;

        return false;
    } else {
        alert("Все данные корректно заполнены");
return true;
    }
    
    return false;

}