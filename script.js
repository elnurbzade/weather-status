const url = "https://api.openweathermap.org/data/2.5/"
const key = "a335e6952c9cdb8e131663a5669f3e20"
const setQuery = (e) => {
  if (e.keyCode == "13") getResult(searchBar.value);
};
const getResult = (cityName) => {
  let query = `&{url}weather?q=${cityName}&appid=335e6952c9cdb8e131663a5669f3e20
  fetch(query)
  .then(wheather => {
    return weather.json()
  })
  .then(displayResult)

}
const displayResult = (result) => {
    console.log(result);
}


const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);
