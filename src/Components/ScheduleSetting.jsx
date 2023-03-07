import React from 'react';

const ScheduleSetting = ({ temperatureSetting, fanSetting, onTemperatureSettingChange, onFanSettingChange }) => {
  const handleTemperatureSettingChange = (event) => {
    onTemperatureSettingChange(event.target.value);
  };

  const handleFanSettingChange = (event) => {
    onFanSettingChange(event.target.value);
  };

  return (
    <div className='schedule-setting'>
      <h2>Schedule setting</h2>
      <div>
        <label>Temperature setting:</label>
        <input
          type="number"
          value={temperatureSetting}
          onChange={handleTemperatureSettingChange}
        />
      </div>
      <div>
        <label>Fan setting:</label>
        <select value={fanSetting} onChange={handleFanSettingChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
};

export default ScheduleSetting;