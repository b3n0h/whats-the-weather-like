const key = config.key
const cityInput = document.querySelector('#cityInput')

cityInput.addEventListener('change', () => {
  const city = cityInput.value
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`
  fetch(url)
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))
})
