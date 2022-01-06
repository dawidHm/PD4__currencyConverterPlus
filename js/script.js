    let formElement = document.querySelector(".js-form");
    let currencySelectorElement = document.querySelector(".js-currencySelector");
    let currencySymbolElement = document.querySelector(".js-currencySymbol");
    let currentRateElement = document.querySelector(".js-currentRate");
    let amountSymbolElement = document.querySelector(".js-amountSymbol");
    let amountElement = document.querySelector(".js-amount");
    let convertResultElement = document.querySelector(".js-convertResult");

    let rateUSD = 4.04;
    let rateEUR = 4.57;

    formElement.addEventListener("input", () => { 
        switch (currencySelectorElement.value) {
            case "eur-pln":
                currentRateElement.value = rateEUR;
                currencySymbolElement.innerText = "€";
                amountSymbolElement.innerText = "€";
                break;
            case "usd-pln":
                currentRateElement.value = rateUSD;
                currencySymbolElement.innerText = "$";
                amountSymbolElement.innerText = "$";
                break;
            case "pln-eur":
                currentRateElement.value = rateEUR;
                currencySymbolElement.innerText = "€";
                amountSymbolElement.innerText = "zł";
                break;
            case "pln-usd":
                currentRateElement.value = rateUSD;
                currencySymbolElement.innerText = "$";
                amountSymbolElement.innerText = "zł";
                break;
        }

    });

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        
        let currency = currentRateElement.value;
        let amount = amountElement.value;
        let convert;

        switch (currencySelectorElement.value) {
            case "eur-pln":
                convert = (currency * amount);
                convertResultElement.innerText = amount + " EUR = " + convert.toFixed(2) + " PLN" ;
                break;
            case "usd-pln":
                convert = (currency * amount);
                convertResultElement.innerText = amount + " USD = " + convert.toFixed(2) + " PLN" ;
                break;
            case "pln-eur":
                convert = (amount / currency);
                convertResultElement.innerText = amount + " PLN = " + convert.toFixed(2) + " EUR" ;
                break;
            case "pln-usd":
                convert = (amount / currency);
                convertResultElement.innerText = amount + " PLN = " + convert.toFixed(2) + " USD" ;
                break;
        }     
    });