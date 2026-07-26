const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate() {
  fetch(
    ` https://v6.exchangerate-api.com/v6/2fdae11bde32f2847b8d3da7/latest/${currencyFirstEl.value}`,
  )
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate = data.conversion_rates[currencySecondEl.value];
      exchangeRateEl.textContent = `1 ${currencyFirstEl.value} = ${exchangeRate} ${currencySecondEl.value}`;
      worthSecondEl.value = (worthFirstEl.value * exchangeRate).toFixed(2);
    });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);
worthSecondEl.addEventListener("input", updateRate);
