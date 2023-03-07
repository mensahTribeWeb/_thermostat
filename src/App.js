
import React from 'react';
import ScheduleSetting from './Components/ScheduleSetting';
import SmartThermostat from './Components/SmartThermostat';
import TemperatureSetting from './Components/TemperatureSetting';


function App() {
  return (
    <div className="App">
      
      <SmartThermostat />
      <ScheduleSetting />
      <TemperatureSetting />
      
    </div>
  );
}

export default App;