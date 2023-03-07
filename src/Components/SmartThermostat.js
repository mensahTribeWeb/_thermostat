import React, { useState, useEffect } from 'react';


function SmartThermostat() {
  const [temperature, setTemperature] = useState(70);
  const [temperatureSetting, setTemperatureSetting] = useState(72);

  useEffect(() => {
    fetch("/smart-thermostat/temperature-information")
      .then((response) => response.json())
      .then((data) => {
        setTemperature(data.temperature);
        setTemperatureSetting(data.temperatureSetting);
      });
  }, []);

  function adjustTemperature() {
    fetch("/smart-thermostat/adjust-temperature", { method: "POST" });
  }

  function saveTemperatureSetting(newTemperatureSetting) {
    setTemperatureSetting(newTemperatureSetting);
    fetch("/smart-thermostat/set-temperature-setting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ temperatureSetting: newTemperatureSetting }),
    });
  }

  return (
    <div className='smart-thermostat'>
      <TemperatureDisplay
        currentTemperature={temperature}
        temperatureSetting={temperatureSetting}
      />
      <TemperatureSetting
        temperature={temperature}
        onSave={saveTemperatureSetting}
      />
      <button onClick={adjustTemperature}>Adjust temperature</button>
    </div>
  );
}

function TemperatureDisplay({ currentTemperature, temperatureSetting }) {
  return (
    <div className='temperature-display'>
      <h2>Current temperature: {currentTemperature}°F</h2>
      <h2>Temperature setting: {temperatureSetting}°F</h2>
    </div>
  );
}

function TemperatureSetting({ temperature, onSave }) {
  const [newTemperatureSetting, setNewTemperatureSetting] =
    useState(temperature);

  function increaseTemperature() {
    setNewTemperatureSetting((prevTemperature) => prevTemperature + 1);
  }

  function decreaseTemperature() {
    setNewTemperatureSetting((prevTemperature) => prevTemperature - 1);
  }

  function handleSave() {
    onSave(newTemperatureSetting);
  }

  return (
    <div className='temper ature-setting'>
      <div>Set temperature:</div>
      <button onClick={decreaseTemperature}>-</button>
      {newTemperatureSetting}
      <button onClick={increaseTemperature}>+</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}


export default SmartThermostat;