document.addEventListener('DOMContentLoaded', function () {


    const conversionRates = {
        'brasil': {
            'usa': 0.18,
            'euro': 0.16,
            'argentina': 18.53,
            'canada': 0.27,
            'uk': 0.17
        },
        'argentina': {
            'usa': 0.011,
            'euro': 0.0095,
            'brasil': 54.00,
            'canada': 0.0039,
            'uk': 0.0024
        },
        'canada': {
            'usa': 1.25,
            'euro': 0.86,
            'brasil': 6.87,
            'argentina': 0.004,
            'uk': 0.59
        },
        'usa': {
            'euro': 0.91,
            'brasil': 5.24,
            'argentina': 102.00,
            'canada': 1.39,
            'uk': 0.83
        },
        'euro': {
            'brasil': 6.22,
            'usa': 1.10,
            'argentina': 96.25,
            'canada': 1.46,
            'uk': 0.87

        },
        'uk': {
            'euro': 1.18,
            'usa': 1.36,
            'brasil': 7.14,
            'argentina': 424,
            'canada': 1.68
        }
    };



    const flags = document.querySelectorAll('.flags');
    const flagContainers = document.querySelectorAll('.flag-container');
    const amountInput = document.getElementById('amountInput');
    const convertedAmount = document.getElementById('convertedAmount');
    

    function atualizaPais(select) {
        let selectedValue = select.value;
        let index = Array.from(flags).indexOf(select);

        let flagMapping = {
            'brasil': '<img src="https://flagicons.lipis.dev/flags/4x3/br.svg" alt="">',
            'argentina': '<img src="https://flagicons.lipis.dev/flags/4x3/ar.svg" alt="">',
            'canada': '<img src="https://flagicons.lipis.dev/flags/4x3/ca.svg" alt="">',
            'usa': '<img src="https://flagicons.lipis.dev/flags/4x3/um.svg" alt="">',
            'euro': '<img src="https://flagicons.lipis.dev/flags/4x3/eu.svg" alt="">',
            'uk': '<img src="https://flagicons.lipis.dev/flags/4x3/gb.svg" alt="">'
        };

        if (selectedValue in flagMapping) {
            flagContainers[index].innerHTML = flagMapping[selectedValue];
        }
    }
    function converterMoeda() {
        let fromCurrency = document.querySelector('.flags[name="from"]').value;
        let toCurrency = document.querySelector('.flags[name="to"]').value;
        let inputAmount = parseFloat(amountInput.value);
        let convertedAmountElement = document.getElementById('convertedAmount');
    
        if (isNaN(inputAmount)) {
            convertedAmountElement.value = ''; // Limpe o campo se o valor de entrada não for um número
        } else {
            if (fromCurrency === toCurrency) {
                convertedAmountElement.value = inputAmount.toFixed(2);
            } else if (conversionRates[fromCurrency] && conversionRates[fromCurrency][toCurrency]) {
                let rate = conversionRates[fromCurrency][toCurrency];
                convertedAmountElement.value = (inputAmount * rate).toFixed(2);
            } else {
                convertedAmountElement.value = 'Taxa de câmbio desconhecida';
            }
        }
    }
    

    flags.forEach(function (select) {
        select.onchange = function () {
            atualizaPais(select);
            converterMoeda();
        };
    });

    amountInput.oninput = converterMoeda;
    atualizaPais(flags[0]);
    converterMoeda();
});
