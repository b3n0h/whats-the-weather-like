const key = config.key
const cityInput = document.querySelector('#cityInput')
let showWeather = document.querySelector('#displayWeather')

cityInput.addEventListener('change', () => {
  const city = cityInput.value
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`
  fetch(url)
    .then(r => r.json())
    .then(data => displayWeather(data))
    .catch(e => console.log(e))
})

function displayWeather(data) {
  console.log(data)
  let cityName = data.name
  let cityTemp = data.main.temp.toString().slice(0, 2)
  
  if (cityTemp <= '60') {

    showWeather.innerHTML = `
    The temperature in ${cityName} is <span style="color: blue">${cityTemp}°F</span>, <br /> better bring a jacket! 
    `
  } else if (cityTemp >= '80') {
    showWeather.innerHTML = `
    The temperature in ${cityName} is <span style="color: orange">${cityTemp}°F</span>, <br /> better wear some sunscreen!
    `
  } else {
    showWeather.innerHTML = 
      `The temperature in ${cityName} is <span style='font-weight: bold'>${cityTemp}°F</span>`
  }
}