{
    const formElement = document.querySelector(".js-form");
    const currencyOptionElement = document.querySelector(".js-currencyOption");
    const currentRateElement = document.querySelector(".js-currentRate");

    const calculateResult = (amount, currency) => {
        const convertResultElement = document.querySelector(".js-convertResult");

        switch (currency) {
            case "eur-pln":
                result = amount * currentRateElement.value;
                convertResultElement.innerHTML = `${amount.toFixed(2)} EUR = <strong>${result.toFixed(2)} PLN </strong>`;
                break;
            case "usd-pln":
                result = amount * currentRateElement.value;
                convertResultElement.innerHTML = `${amount.toFixed(2)} USD = <strong>${result.toFixed(2)} PLN </strong>`;
                break;
            case "pln-eur":
                result = amount / currentRateElement.value;
                convertResultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} EUR </strong>`;
                break;
            case "pln-usd":
                result = amount / currentRateElement.value;
                convertResultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} USD </strong>`;
                break;
            case "customOption":
                result = amount / currentRateElement.value;
                convertResultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} X </strong>`;
                break;
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        let currency = currencyOptionElement.value;
        const amount = +amountElement.value;

        const result = calculateResult(amount, currency);
    }

    const changeLabels = () => {
        const currencySymbolElement = document.querySelector(".js-currencySymbol");
        const amountSymbolElement = document.querySelector(".js-amountSymbol");

        formElement.addEventListener("input", () => {
            switch (currencyOptionElement.value) {
                case "eur-pln":
                    currentRateElement.value = 4.57;
                    currencySymbolElement.innerText = "€";
                    amountSymbolElement.innerText = "€";
                    break;
                case "usd-pln":
                    currentRateElement.value = 4.04;
                    currencySymbolElement.innerText = "$";
                    amountSymbolElement.innerText = "$";
                    break;
                case "pln-eur":
                    currentRateElement.value = 4.57;
                    currencySymbolElement.innerText = "€";
                    amountSymbolElement.innerText = "zł";
                    break;
                case "pln-usd":
                    currentRateElement.value = 4.04;
                    currencySymbolElement.innerText = "$";
                    amountSymbolElement.innerText = "zł";
                    break;
                case "customOption":
                    currencySymbolElement.innerText = "(X)";
                    amountSymbolElement.innerText = "zł";
                    break;
            }
        });

    }

    const init = () => {
        changeLabels();

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}
