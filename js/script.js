let currencyElement = document.querySelector(".js-form__inputEuro");
let amountElement = document.querySelector(".js-inputCurrency");
let formElement = document.querySelector(".js-form");
let convertElement = document.querySelector(".js-result");

let selectorElement = document.querySelector(".js-currencySelector");
let euroElement = document.querySelector(".js-form__euro");
let dollarElement = document.querySelector(".js-form__dollar")
let currencySymbolElement = document.querySelector(".js-currencySymbol");

formElement.addEventListener("input", () => {
    switch (selectorElement.value) {
        case "eur":
            dollarElement.classList.add("form__dollar--hidden");
            euroElement.classList.remove("form__euro--hidden");
            currencyElement = document.querySelector(".js-form__inputEuro");
            currencySymbolElement.innerText = "€";
            break;
        case "usd":
            euroElement.classList.add("form__euro--hidden");
            dollarElement.classList.remove("form__dollar--hidden");
            currencyElement = document.querySelector(".js-form__inputDollar");
            currencySymbolElement.innerText = "$";
            break;
    }
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = amountElement.value;

    let convert = (currency * amount);

    convertElement.innerText = convert.toFixed(2);
});
