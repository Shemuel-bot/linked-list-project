import DisplayValues from "./DisplayWeather";

let value = "london";

async function CallApi() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=3e04850aa3124160880174442240303&q=${value}`,
    { mode: "cors" },
  );
  const feedBack = await response.json();
  DisplayValues(feedBack);
}

function Change() {
  document.querySelector("button").onclick = () => {
    value = document.querySelector("input").value;
    CallApi();
  };
}
export default Change;
