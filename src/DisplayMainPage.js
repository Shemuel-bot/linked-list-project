function Display() {
  const form = document.createElement("form");
  const fieldSet = document.createElement("fieldset");
  const inputLabel = document.createElement("label");
  const userInput = document.createElement("input");
  const submit = document.createElement("button");
  const foreCastDiv = document.createElement("div");
  const foreCastHeader = document.createElement("h2");
  const celsiusTemp = document.createElement("p");
  const fahrenheitTemp = document.createElement("p");
  const windSpeedKm = document.createElement("p");
  const windSpeedMi = document.createElement("p");
  const humididty = document.createElement("p");

  submit.textContent = "Choose";
  submit.type = "button";

  userInput.id = "location";
  inputLabel.for = "location";
  inputLabel.textContent = "Choose a location";

  foreCastDiv.id = "forecast";
  foreCastHeader.textContent = `Today's forecast`;

  celsiusTemp.textContent = `Celsius:`;
  fahrenheitTemp.textContent = `Fahrenheit:`;
  windSpeedKm.textContent = `Wind Speed:`;
  windSpeedMi.textContent = `Wind Speed:`;
  humididty.textContent = `Humidity:`;

  celsiusTemp.id = `Celsius`;
  fahrenheitTemp.id = `Fahrenheit`;
  windSpeedKm.id = `Wind SpeedKm`;
  windSpeedMi.id = `Wind SpeedMi`;
  humididty.id = `Humidity`;

  fieldSet.appendChild(inputLabel);
  fieldSet.appendChild(userInput);

  form.appendChild(fieldSet);
  form.appendChild(submit);

  foreCastDiv.appendChild(foreCastHeader);
  foreCastDiv.appendChild(celsiusTemp);
  foreCastDiv.appendChild(fahrenheitTemp);
  foreCastDiv.appendChild(windSpeedKm);
  foreCastDiv.appendChild(windSpeedMi);
  foreCastDiv.appendChild(humididty);

  document.body.appendChild(form);
  document.body.appendChild(foreCastDiv);
}
export default Display;
