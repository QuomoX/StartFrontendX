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